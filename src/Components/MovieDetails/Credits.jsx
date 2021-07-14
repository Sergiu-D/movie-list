import React from "react";

//Utils
import useSWR from "swr";
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
    height: "100px",
    borderRadius: "50px",
  },

  itemWrapper: {
    maxHeight: "116px",
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
      {creditsData.cast.map((actor) => (
        <GridItemTab key={actor.id}>
          <div className={classes.itemWrapper}>
            <CardMedia
              className={classes.poster}
              component="img"
              src={checkProfileImg(actor.profile_path)}
              alt={`${actor.name} profile image`}
            />
            <CardContent className={classes.content}>
              <Typography
                variant="body1"
                component="p"
                className={classes.paragraph}
              >
                {actor.name}{" "}
                <Typography variant="body1" component="span">
                  {" "}
                  as {actor.character}
                </Typography>
              </Typography>
            </CardContent>
          </div>
        </GridItemTab>
      ))}
    </GridContainerTab>
  );
}
