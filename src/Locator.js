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
    <Grid container spacing={0} justifyContent="center">
      <Grid item m={1}>
        <Paper>
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

      <Grid item m={1}>
        <Card sx={{ maxWidth: 350, height: 350 }}>
          <CardMedia
            component="img"
            height="140"
            image={locFacts.flag}
            alt="flag"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
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
              <strong>{locFacts.name}</strong>. Free API keys provide scant
              data, so the best fact I can offer you is that{" "}
              <strong>{locFacts.name}</strong> is in{" "}
              <strong>{locFacts.region}</strong>.{" "}
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
