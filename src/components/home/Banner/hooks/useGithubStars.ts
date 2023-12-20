import { useCallback, useEffect, useState } from 'react';
import { DefaultStars } from '../../../common/Publicize';

export const useGetGithubStars = (): [boolean, number] => {
  const [isLoading, setIsLoading] = useState(true);

  const [stars, setStars] = useState(DefaultStars);

  const getStars = useCallback(async (signal: AbortSignal) => {
    try {
      const res = await fetch(
        'https://api.github.com/repos/illacloud/illa-builder',
        { signal },
      );
      const resJSON = await res.json();
      return resJSON?.stargazers_count || DefaultStars;
    } catch {
      return DefaultStars;
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

  return [isLoading, stars];
};
