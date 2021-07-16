import React from "react";

//Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";

// Components
import { GridContainerTab, GridItemTab } from "./DescriptionTabs";

//Material-ui
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

// Lazy load
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const useStyles = makeStyles((theme) => ({
  poster: {
    maxWidth: "100px",
    maxHeight: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top",
  },

  itemWrapper: {
    maxHeight: "120px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "hsla(0, 100%, 100%,.08)",
    padding: ".5rem 1rem",
  },
  content: {
    alignSelf: "center",
    marginLeft: "2rem",
  },
  paragraph: {
    fontSize: "1.5rem",
    fontWeight: "700",

    "& span": {
      fontSize: "1.2rem",
      fontWeight: "100",
    },
  },
}));

export default function Credits(props) {
  const classes = useStyles();

  const { id, mediaType } = props;

  const filterMediaType =
    mediaType === "movie" ? `movie/${id}/credits` : `tv/${id}/credits`;

  // Fetching credits
  const { data: creditsData, error: creditsError } = useSWR(
    fetchingQuery(filterMediaType),
    fetcher
  );

  if (!creditsData) return <h3>Loading...</h3>;
  if (creditsError) return <h3>Error!</h3>;

  const checkProfileImg = (profile_path) => {
    const profileImg = profile_path
      ? `https://image.tmdb.org/t/p/original${profile_path}`
      : `https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg`;

    return profileImg;
  };

  return (
    <GridContainerTab>
      {!creditsData.cast.length ? (
        <Typography
          variant="h4"
          style={{
            margin: "1rem auto",
            fontWeight: 200,
          }}
        >
          No Info
        </Typography>
      ) : (
        creditsData.cast.map((actor) => (
          <LazyLoadComponent
            key={actor.id}
            placeholder={<div className={classes.itemWrapper}></div>}
          >
            <GridItemTab>
              <div className={classes.itemWrapper}>
                <LazyLoadImage
                  height="100%"
                  width="100px"
                  effect="blur"
                  className={classes.poster}
                  component="img"
                  src={checkProfileImg(actor.profile_path)}
                  alt={`${actor.name} profile image`}
                  threshold={400}
                />
                <CardContent className={classes.content}>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.paragraph}
                  >
                    {actor.name}{" "}
                    {actor.character && (
                      <Typography variant="body1" component="span">
                        {" "}
                        as {actor.character}
                      </Typography>
                    )}
                  </Typography>
                </CardContent>
              </div>
            </GridItemTab>
          </LazyLoadComponent>
        ))
      )}
    </GridContainerTab>
  );
}
