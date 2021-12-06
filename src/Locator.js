import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { DateTime } from "luxon";

export default function Locator({ locData, locFacts }) {
  const mapUrl = `https://api.mapbox.com/styles/v1/staswerno/ckwul5ede58pt14mkqz1m37et/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API}`;
  const dt = DateTime.now();
  console.log(dt.year);

  return (
    <Grid
      container
      spacing={3}
      mt={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Paper
          elevation={6}
          sx={{
            height: 325,
            width: 325,
          }}
        >
          <MapContainer
            center={[locData.location.lat, locData.location.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
              url={mapUrl}
            />

            <Marker position={[locData.location.lat, locData.location.lng]}>
              <Popup>You are here.</Popup>
            </Marker>
          </MapContainer>
        </Paper>
      </Grid>

      <Grid item>
        <Card sx={{ width: 325, height: 325 }} elevation={6} square>
          <CardMedia
            component="img"
            height="140"
            image={locFacts.flag}
            alt="flag"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
            >
              Your IP is {locData.ip}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="text.secondary"
              textAlign="center"
            >
              You are in <strong>{locData.location.city},</strong>{" "}
              <strong>{locFacts.name}</strong>. <br />
              Which is in <strong>{locFacts.region}</strong> btw.{" "}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              You requested this information on: <br />{" "}
              <strong>
                {dt.year}/{dt.month}/{dt.day}
                <br />
                {dt.hour}:{dt.minute}:{dt.second}
              </strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
