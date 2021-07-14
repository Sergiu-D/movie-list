import React from "react";
import { Link, useHistory } from "react-router-dom";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

// Components
import { GridContainerTab, GridItemTab } from "../Layout/MovieDescriptionTab";

//Material-ui
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Card,
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
    backgroundColor: "hsla(0, 100%, 100%,.2)",
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
  console.log("🚀 ~ file: Credits.jsx ~ line 15 ~ Credits ~ data", data);

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
  console.log(
    "🚀 ~ file: SimilarTitles.jsx ~ line 85 ~ SimilarTitles ~ totalResults",
    totalResults
  );
  console.log(
    "🚀 ~ file: SimilarTitles.jsx ~ line 87 ~ SimilarTitles ~ recommendedTitles length",
    recommendedTitles.length
  );
  console.log(
    "🚀 ~ file: SimilarTitles.jsx ~ line 91 ~ SimilarTitles ~ testLength",
    testLength
  );

  return (
    <>
      <GridContainerTab>
        {recommendedTitles.map((title) => (
          <GridItemTab key={title.id}>
            <Link
              to={`/recommended/from=${fromTitle}/${title.media_type}/${
                title.id
              }/${title.title || title.name}`}
            >
              <div className={classes.itemWrapper}>
                <CardMedia
                  className={classes.poster}
                  component="img"
                  src={checkProfileImg(title.poster_path)}
                  alt={`${title.title} profile image`}
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
        <button
          onClick={() => handleShowMore(data)}
          style={{ width: "20%", padding: ".5rem 0", margin: "1rem auto" }}
        >
          Show More
        </button>
      )}
    </>
  );
}
