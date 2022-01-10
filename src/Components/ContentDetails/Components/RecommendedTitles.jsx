import React from "react";
import { Link } from "react-router-dom";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";

// Components
import { GridContainerTab, GridItemTab } from "./DescriptionTabs";

// Lazy img load
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Material-ui
import { makeStyles, Typography, Button, CardContent } from "@material-ui/core";

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
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "hsla(0, 100%, 100%,.15)",
    },
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

  button: {
    width: "20%",
    padding: ".5rem 0",
    margin: "1rem auto",

    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
      padding: ".8rem 0",
    },
  },
}));

export default function RecommendedTitles(props) {
  const { id, mediaType } = props;

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

  const handleShowMore = () => {
    setSize((prev) => prev + 1);
  };

  //   const recommendedTitles = [];

  const recommendedTitles = [];

  data.forEach((obj) => recommendedTitles.push(...obj.results));

  const totalResults = data[0].total_results && recommendedTitles;
  console.log(
    "🚀 ~ file: RecommendedTitles.jsx ~ line 105 ~ RecommendedTitles ~ totalResults",
    totalResults
  );

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
              <LazyLoadComponent
                placeholder={
                  <div
                    className={classes.itemWrapper}
                    style={{ minHeight: "171px" }}
                  ></div>
                }
              >
                <div className={classes.itemWrapper}>
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
              </LazyLoadComponent>
            </Link>
          </GridItemTab>
        ))}
      </GridContainerTab>
      {recommendedTitles.length ? (
        <Typography
          variant="h4"
          style={{
            margin: "1rem auto",
            fontWeight: 200,
          }}
        >
          {recommendedTitles.length === 0 ? "No Info" : "That's it"}
        </Typography>
      ) : (
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handleShowMore()}
        >
          Show More
        </Button>
      )}
    </>
  );
}
