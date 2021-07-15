import React from "react";
import { Link, useHistory } from "react-router-dom";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";

// Components
import { GridContainerTab, GridItemTab } from "./DescriptionTabs";

// Lazy img load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Material-ui
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Button,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  poster: {
    width: "100px",
    height: "150px",
    // borderRadius: "50px",
  },

  itemWrapper: {
    // maxHeight: "116px",
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
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "700",

    "& span": {
      fontSize: "1.2rem",
      fontWeight: "100",
    },
  },
}));

export default function RecommendedTitles(props) {
  const { id, mediaType, fromTitle } = props;

  const classes = useStyles();

  const filterMediaType =
    mediaType === "movie"
      ? `movie/${id}/recommendations`
      : `tv/${id}/recommendations`;

  // Fetching credits
  const { data, error, setSize } = useSWRInfinite(
    (index) => `${fetchingQuery(filterMediaType)}&page=${index + 1}`,
    fetcher
  );

  if (!data) return <h3>Loading...</h3>;
  if (error) return <h3>Error!</h3>;

  const checkProfileImg = (poster_path) => {
    const posterPath = poster_path
      ? `https://image.tmdb.org/t/p/original${poster_path}`
      : `https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg`;

    return posterPath;
  };

  const handleShowMore = (data) => {
    setSize((prev) => prev + 1);
  };

  //   const recommendedTitles = [];

  const totalResults = data[0].total_results;

  const recommendedTitles = [];
  data.forEach((obj) => recommendedTitles.push(...obj.results));

  const testLength = totalResults === recommendedTitles.length;

  return (
    <>
      <GridContainerTab>
        {recommendedTitles.map((title) => (
          <GridItemTab key={title.id}>
            <Link
              to={{
                pathname: `/recommended/selected`,
                search: `?media_type=${title.media_type}&id=${title.id}&name=${
                  title.title || title.name
                }`,
              }}
            >
              <div className={classes.itemWrapper}>
                {/* <CardMedia
                  className={classes.poster}
                  component="img"
                  src={checkProfileImg(title.poster_path)}
                  alt={`${title.title} profile image`}
                /> */}
                <LazyLoadImage
                  className={classes.poster}
                  height="100%"
                  width="100px"
                  effect="blur"
                  alt={`${title.title} poster`}
                  src={checkProfileImg(title.poster_path)}
                  threshold={400}
                />
                <CardContent className={classes.content}>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.paragraph}
                  >
                    {title.title || title.name}{" "}
                  </Typography>
                </CardContent>
              </div>
            </Link>
          </GridItemTab>
        ))}
      </GridContainerTab>
      {totalResults <= recommendedTitles.length ? (
        <Typography variant="h4" style={{ margin: "1rem auto" }}>
          That is it
        </Typography>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleShowMore(data)}
          style={{ width: "20%", padding: ".5rem 0", margin: "1rem auto" }}
        >
          Show More
        </Button>
      )}
    </>
  );
}
