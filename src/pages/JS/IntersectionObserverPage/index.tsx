import { useEffect, useMemo, useState } from 'react';

import { Typography } from '@mui/material';

import { useQueryUserById } from '~/services/users/useQueryUserById';

import {
  StyledItem,
  StyledItemContainer,
  StyledSkeletonItem,
} from '~/pages/JS/IntersectionObserverPage/styles';
import {
  defaultDemoLazyLoadingData,
  DemoLazyLoadingData,
} from '~/pages/JS/utils/lazyLoadingData';

import { Stack } from '~/components/MuiComponents';

export interface IIntersectionObserverPageProps {}

export default function IntersectionObserverPage() {
  const [lazyData, setLazyData] = useState(defaultDemoLazyLoadingData);
  const [gettingId, setGettingId] = useState('1');
  const [idQueueList, setIdQueueList] = useState<string[]>([]);
  const { data, isSuccess, isLoading } = useQueryUserById(gettingId);

  useEffect(() => {
    if (!isLoading && idQueueList.length) {
      const currentQueueList = [...idQueueList];
      const newGettingId = currentQueueList.shift();

      if (newGettingId) {
        setGettingId(newGettingId);
        setIdQueueList(currentQueueList);
      }
    }
  }, [idQueueList, isLoading, isSuccess]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.3) {
            const targetId = entry.target.id.replace('data', '');
            setIdQueueList((prevValue) => [...prevValue, targetId]);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    Object.keys(defaultDemoLazyLoadingData).map((key) => {
      const elements = document.querySelectorAll(`#${key}`);
      elements.forEach((element) => {
        observer.observe(element);
      });
    });
  }, []);

  useEffect(() => {
    if (!data && !isSuccess) return;

    setLazyData((prevValue) => ({
      ...prevValue,
      [`data${gettingId}`]: [
        data.id,
        data.username,
        data.name,
        data.email,
        data.phone,
        data.website,
      ],
    }));
  }, [data, gettingId, isSuccess]);

  const skeletonBox = useMemo(
    () => (
      <>
        <StyledSkeletonItem></StyledSkeletonItem>
        <StyledSkeletonItem></StyledSkeletonItem>
        <StyledSkeletonItem></StyledSkeletonItem>
        <StyledSkeletonItem></StyledSkeletonItem>
        <StyledSkeletonItem></StyledSkeletonItem>
        <StyledSkeletonItem></StyledSkeletonItem>
      </>
    ),
    [],
  );

  return (
    <Stack sx={{ width: '100%', height: '100%' }}>
      <Stack sx={{ flex: 1 }}>
        <StyledItemContainer>
          {Object.keys(lazyData).map((key) => {
            if (lazyData[key as keyof DemoLazyLoadingData]) {
              return (
                <StyledItemContainer
                  key={`KEY_${key}`}
                  height={400}
                  id={key}
                  marginBottom={10}
                >
                  {lazyData[key as keyof DemoLazyLoadingData]?.map((data) => (
                    <StyledItem key={`DATA_${key}_${data}`}>
                      <Typography color='white' variant='h6'>
                        {data}
                      </Typography>
                    </StyledItem>
                  ))}
                </StyledItemContainer>
              );
            }
            return (
              <StyledItemContainer key={`KEY_${key}`} id={key}>
                {skeletonBox}
              </StyledItemContainer>
            );
          })}
        </StyledItemContainer>
      </Stack>
    </Stack>
  );
}
