import { formatNumToThousands } from '@site/src/utils/formatNum';
import { useCallback, useEffect, useState } from 'react';

const DEFAULT_STARS = 10000;

export const useGetGithubStars = (): [boolean, string] => {
  const [isLoading, setIsLoading] = useState(true);

  const [stars, setStars] = useState(0);

  const getStars = useCallback(async (signal: AbortSignal) => {
    try {
      const res = await fetch(
        'https://api.github.com/repos/illacloud/illa-builder',
        { signal },
      );
      const resJSON = await res.json();
      console.log('--', resJSON)
      return resJSON?.stargazers_count || DEFAULT_STARS;
    } catch {
      return DEFAULT_STARS;
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    getStars(abortController.signal).then((stars) => {
      setStars(stars);
      setIsLoading(false);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return [isLoading, formatNumToThousands(stars)];
};
