import { useEffect, useState } from 'react';

import { CardMedia, Grid, Skeleton } from '@mui/material';
import Typography from '@mui/material/Typography';

import { StyledImageItem } from '~/pages/JS/PromiseRacePage/styles';
import {
  getImageUrls,
  ImageType,
  ReponseImage,
} from '~/pages/JS/utils/promiseRaceData';

export const PromiseRacePage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageType, setImageType] = useState<ImageType | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      setError(null);
      setIsLoading(true);

      try {
        const winner: ReponseImage | null = await Promise.race(
          getImageUrls.map(async (imageUrl) => {
            const response = await fetch(imageUrl.url);
            if (!response.ok) {
              throw new Error(
                `Network response was not ok (status: ${response.status})`,
              );
            }
            return { imageResponse: response, type: imageUrl.type }; // Assuming the response is the image data
          }),
        );
        if (winner) {
          const blob = await winner.imageResponse.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
          setImageType(winner.type);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, []);

  const generateImageByType = (type: ImageType) => {
    if (isLoading || !imageType || !imageUrl) {
      return (
        <Skeleton height={340} variant='rounded' width='100%'>
          loading...
        </Skeleton>
      );
    }

    if (type === imageType && imageUrl) {
      return <CardMedia alt='Random Image' component='img' image={imageUrl} />;
    }

    return (
      <CardMedia
        alt='Rejected Image'
        component='img'
        image={'/rejected_image.webp'}
      />
    );
  };

  return (
    <>
      <Typography fontWeight={'bold'} margin={2} variant='h4'>
        Using <strong>promise.race()</strong> to get the fastest image
      </Typography>
      {error ? (
        <Typography color='error' variant='body2'>
          Error loading image: {error.message}
        </Typography>
      ) : (
        <Grid container gap={1} justifyContent='space-around' paddingInline={2}>
          {getImageUrls.map((image, index) => (
            <Grid key={`IMAGE_${index + 1}`} item xs={3}>
              <StyledImageItem>
                <Typography marginBottom={5} variant='h5'>
                  <strong>Category</strong>: {image.type}
                </Typography>
                {generateImageByType(image.type)}
              </StyledImageItem>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
