import * as H from 'history';
import { useMemo, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export const replace = (history: H.History, location: H.Location, search: URLSearchParams): void => {
  history.replace({
    ...location,
    search: search.toString(),
  });
};

export type HistoryAndLocation = {
  location: H.Location;
  history: H.History;
  search: URLSearchParams;
  updateLocationUrl: (paramName: string, paramValue: string) => void;
  urlAllParams: Record<string, string>;
};

export const useHistoryAndLocation = (): HistoryAndLocation => {
  const location = useLocation();
  const history = useHistory();
  const search = useMemo(() => new URLSearchParams(location.search), [location.search]);

  /**
   * 回填url参数，重新刷新url
   * @param {string} paramName 参数名
   * @param {string} paramValue 参数值
   */
  const updateLocationUrl = useCallback(
    (paramName: string, paramValue: string) => {
      search.set(paramName, paramValue);
      window.requestAnimationFrame(() => replace(history, location, search));
    },
    [history, location, search],
  );

  const urlAllParams: Record<string, string> = useMemo(() => {
    const { search: searchStr } = location;
    const resultStr = decodeURI(searchStr);
    const searchData = resultStr
      .slice(1)
      .split('&')
      .reduce((pre, cur) => {
        const index = cur.indexOf('=');
        const key = cur.slice(0, index);
        const value = cur.slice(index + 1);
        return {
          ...pre,
          [key]: value,
        };
      }, {});
    return searchData;
  }, [location]);
  return { location, history, search, updateLocationUrl, urlAllParams };
};