import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import "./creativeLanding.css";
import img1 from "../../Assets/andrea-de-santis-zwd435-ewb4-unsplash.jpg";
import img2 from "../../Assets/daniel-lincoln-VIoNlC4ZHXM-unsplash.jpg";
import img3 from "../../Assets/deepmind-ZJKE4XVlKIA-unsplash.jpg";
import img4 from "../../Assets/diego-ph-fIq0tET6llw-unsplash.jpg";
import img5 from "../../Assets/felix-steininger-gReO2TAG5ug-unsplash.jpg";
import img6 from "../../Assets/sascha-bosshard-qhhp1LwvPSI-unsplash.jpg";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },

  {
    img: img1,
    title: "Basketball",
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: "Fern",
  },
  {
    img: img3,
    title: "Mushrooms",
  },
  {
    img: img4,
    title: "Tomato basil",
    rows: 2,
    cols: 2,
  },
  {
    img: img5,
    title: "Sea star",
  },
  {
    img: img6,
    title: "Bike",
    
  },
];

function CreativeLanding() {
  return (
    <Box className="ps_box">
      <Container className="ps_container">
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={6}
          rowHeight={300}
          className="ps_imageList"
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              className="ps_imageList_items"
            >
              <img
                {...srcset(item.img, 100, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                className="ps_image"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}

function srcset(image, size, rows = 2, cols = 2) {
  return {
    src: `${image}?w=${size * size * cols}&h=${size * rows + 800}&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&auto=format&dpr=10 10x`,
  };
}

export default CreativeLanding;
