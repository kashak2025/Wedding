import { useState } from 'react';
import Card from '../Components/Card';
import {Box} from '@mui/material';

const WomenMain = () => {
  let [current, setCurrent] = useState('items'); 
  let data = [
      {
        id: 1,
        title: "Doe Gown With A Long Cape In Sequins Embroidery, Crafted In Sleeveless With A V Neckline And A Side Zip Closure",
        price: 109.95,
        product: "Gown",
        image: 'https://staticm247.kalkifashion.com/media/tagalys/product_images/d/o/doeskin_cream_gown_in_sequins_embroidery-m001ra631y-sg95951_5_.jpg',
        rating: {
          rate: 3.9,
          count: 120
        }
      },
      {
        id: 2,
        title: "Yellow Georgette Printed Gown With Mirror Work Jacket",
        price: 22.3,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/y/e/yellow_georgette_printed_gown_with_mirror_work_jacket-sg239740_5_.jpg",
        rating: {
          rate: 4.1,
          count: 259
        }
      },
      {
        id: 3,
        title: "Lilac Sequin Gown With Attached Cheeta Work Cape Sleeves",
        price: 55.99,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/lilac_sequin_gown_with_attached_cheeta_work_cape-sg269765_5_.jpg",
        rating: {
          rate: 4.7,
          count: 500
        }
      },
      {
        id: 4,
        title: "Frappe Mermaid Gown In Cut Dana Dangling Tassels On The Shoulder",
        price: 15.99,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/f/r/frappe_mermaid_gown_in_cut_dana_dangling-m001i18y-sg101083_2_.jpg",
        rating: {
          rate: 2.1,
          count: 430
        }
      },
      {
        id: 5,
        title: "Brown Organza Gown In Sleeveless With Sequins Embroidery",
        price: 695,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/r/brown_organza_gown-m001ra686y-sg102038.jpg",
        rating: {
          rate: 4.6,
          count: 400
        }
      },
      {
        id: 6,
        title: "Oyster Organza Gown With Wide Sleeves, Fabricated In Tissue Organza In A Deep V Neckline",
        price: 168,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/y/oyster_organza-m001m645y-sg102062_13_.jpg",
        rating: {
          rate: 3.9,
          count: 70
        }
      },
      {
        id: 7,
        title: "Blue Fish Cut Ombre Trail Embroidered Gown ",
        price: 9.99,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_fish_cut_ombre_trail_embroidered_gown-sg226260.jpg",
        rating: {
          rate: 3,
          count: 400
        }
      },
      {
        id: 8,
        title: "Onion Pink Gown In Georgette With Cut Dana Embroidery",
        price: 10.99,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/n/onion_pink_gown_in_georgette_with_cut-sg160137_2_.jpg",
        rating: {
          rate: 1.9,
          count: 100
        }
      },
      {
        id: 9,
        title: "Fern Green Gown In Net With Geometric Hand Embroidery And Organza Drapes On The Sides",
        price: 64,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/f/e/fern_green_gown_in_net_with_geometric_hand_embroidery-m001tr411y-sg81208.jpg",
        rating: {
          rate: 3.3,
          count: 203
        }
      },
      {
        id: 10,
        title: "Mehreen In Kalki Burgundy Gown In Embellished Net With Fancy Cut Out Back",
        price: 109,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/m/e/mehreen_in_kalki_burgundy_gown_in_embellished_net_with_fancy_cut_out_back_3_.jpg",
        rating: {
          rate: 2.9,
          count: 470
        }
      },
      {
        id: 11,
        title: "Turq Blue Flared Anarkali Kurti In Silk With Multicolor Print",
        price: 109,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/r/printed_scuba_blue-flared_anarkali_gown_in_silk_with_multico-sg131157_2_.jpg",
        rating: {
          rate: 4.8,
          count: 319
        }
      },
      {
        id: 12,
        title: "Off White Pallu Style Draped Anarkali Suit",
        price: 114,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/f/off_white_pallu_style_draped_anarkali_suit_-sg261578_1_.jpg",
        rating: {
          rate: 4.8,
          count: 400
        }
      },
      {
        id: 13,
        title: "Off White Gown In Georgette With Tiered Flare And Hand Embroidered Leaf Motifs On The Bodice  ",
        price: 599,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/f/off-white-gown-in-georgette-with-tiered-flare-and-hand-embroidered-leaf-motifs-on-the-bodice-online-kalki-fashion-m001g3015y-sg73163_2_.jpg",
        rating: {
          rate: 2.9,
          count: 250
        }
      },
      {
        id: 14,
        title: "Bottle Green Gown In Crepe With Side Cut Outs In The Hand Embroidered Bodice  ",
        price: 999.99,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/o/bottle-green-gown-in-crepe-with-side-cut-outs-in-the-hand-embroidered-bodice-online-kalki-fashion-m001g3011y-sg73164_5_.jpg",
        rating: {
          rate: 2.2,
          count: 140
        }
      },
      {
        id: 15,
        title: "Lavender Purple Ball Gown In Organza With Ruffle Frills And Embroidery",
        price: 56.99,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/a/s/ashley_blue_ball_gown_in_organza_with_ruffle-sg118217_2_.jpg",
        rating: {
          rate: 2.6,
          count: 235
        }
      },
      {
        id: 16,
        title: "Wine Sequins Embroidered Evening Gown In Georgette With Resham Work",
        price: 29.95,
        product: "Gown",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/w/i/wine_sequins_embroidered_evening_gown_in_georgette-sg151361_2_.jpg",
        rating: {
          rate: 2.9,
          count: 340
        }
      },
      {
        id: 17,
        title: "Orange Embroidered Organza Lehenga Choli Set",
        price: 39.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/r/orange_embroidered_organza_lehenga_choli_set-sg236665_5_.jpg",
        rating: {
          rate: 3.8,
          count: 679
        }
      },
      {
        id: 18,
        title: "Multi Color Organza Embroidered Mirror Work Plunge Meher Choli And Lehenga Set For Women by Studio Iris India Online at Aza Fashions.",
        price: 9.85,
        product: "choli",
        image: "https://i.pinimg.com/control/564x/98/d1/33/98d1335f3b25c2726ed17061cf05aa98.jpg",
        rating: {
          rate: 4.7,
          count: 130
        }
      },
      {
        id: 19,
        title: "Lime Green Embroidered Georgette Lehenga Choli Set",
        price: 7.95,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/lime_green_embroidered_georgette_lehenga_choli_set-sg238965_6_.jpg",
        rating: {
          rate: 4.5,
          count: 146
        }
      },
      {
        id: 20,
        title: "Black Embroidered Ombre Lehenga Choli Set",
        price: 12.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_embroidered_ombre_lehenga_choli_set-sg237926_7_.jpg",
        rating: {
          rate: 3.6,
          count: 145
        }
      },
      {
        id: 21,
        title: "Green Printed Lehenga Choli With Embroidered Jacket",
        price: 39.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/r/green_printed_lehenga_choli_with_embroidered_jacket-sg235435_7_.jpg",
        rating: {
          rate: 3.8,
          count: 679
        }
      },
      {
        id: 22,
        title: "Light Pink Lehenga Choli With Multi Colored 3D Embroidered Kalis In Floral And Scallop Motifs",
        price: 9.85,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/y/oyster_royal_heritage_lehenga_and_choli_with_detailed_hand_embroidered_floral-sg10_4_.png",
        rating: {
          rate: 4.7,
          count: 130
        }
      },
      {
        id: 23,
        title: "Orange Lehenga With Cut Dana Embroidery On The Choli",
        price: 7.95,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/r/orange_lehenga_with_cut_dana_embroidery_on_the_choli-sg102154_5_.jpg",
        rating: {
          rate: 4.5,
          count: 146
        }
      },
      {
        id: 24,
        title: "Lime Green Embroidered Georgette Lehenga Choli Set",
        price: 12.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/lime_green_embroidered_georgette_lehenga_choli_set-sg238965_6_.jpg",
        rating: {
          rate: 3.6,
          count: 145
        }
      },
      {
        id: 25,
        title: "Oyster Royal Heritage Lehenga And Choli With Detailed Hand Embroidered Floral Kalis And Plunging Neckline",
        price: 39.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/y/oyster_royal_heritage_lehenga_and_choli_with_detailed_hand_embroidered-sg102030.jpg",
        rating: {
          rate: 3.8,
          count: 679
        }
      },
      {
        id: 26,
        title: "Melon Peach Ombre Lehenga Embellished In Sequins With Moti Embroidered Crop Top With Illusion Neckline And Full Sleeves",
        price: 9.85,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/m/e/melon-peach-ombre-lehenga-in-sequins-fabric-with-moti-embroidered-crop-top-with-illusion-neckline-and-full-sleeves-m001ra425y-sg56191_6_.jpg",
        rating: {
          rate: 4.7,
          count: 130
        }
      },
      {
        id: 27,
        title: "Gold Pre Pleated Lehenga With Choker Dupatta",
        price: 7.95,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/o/gold_pre_pleated_lehenga_with_choker_dupatta-sg207230_5_.jpg",
        rating: {
          rate: 4.5,
          count: 146
        }
      },
      {
        id: 28,
        title: "Light Pink Lehenga Set With A Choli In Moti Embroidery, Crop Top Comes In Half Sleeves With Cut Work",
        price: 12.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/light_pink_lehenga_set_with_a_choli_in_moti_embroidery_crop_top_comes-sg102028_9_.jpg",
        rating: {
          rate: 3.6,
          count: 145
        }
      },
      {
        id: 29,
        title: "Bride And Baraat Apple Red Fully Embroidered Lavish Lehenga Choli With Belt",
        price: 39.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_bride_baraat_tango_red_fully-sg107738_9_.jpg",
        rating: {
          rate: 3.8,
          count: 679
        }
      },
      {
        id: 30,
        title: "Rouge Red Bridal Lehenga Set In Raw Silk With Aari And Zardosi Work",
        price: 9.85,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/r/o/rouge_red_bridal_lehenga_set_in_raw_silk_with_aari-sg154658_13_.jpg",
        rating: {
          rate: 4.7,
          count: 130
        }
      },
      {
        id: 31,
        title: "Bridal Khwabeeda Beige White Lehenga Set In Foil Organza With 3D Embroidery - NOOR 2022",
        price: 7.95,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/r/bridal_khwabeeda_beige_white_lehenga-sg127974_5_.jpg",
        rating: {
          rate: 4.5,
          count: 146
        }
      },
      {
        id: 32,
        title: "Dark Red Lehenga With A Crop Top In Royal Heritage Embroidery, Crop Top Comes In Scalloped Neckline",
        price: 12.99,
        product: "choli",
        image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/d/a/dark_red_lehenga_with_a_crop_top-sg102157_-1_2_.jpg",
        rating: {
          rate: 3.6,
          count: 145
        }
      }
      
    ]
  let [filter, setfilter] = useState(data)

  function manageData(item) {
    setfilter(data.filter(el => item === "All" ? data : el.product === item))
    setCurrent(item);
  }
  return (
    <div>
      <button className={current === "All" ? 'active' : ""} onClick={() => manageData("All")}>All</button>
      <button className={current === "men's-clothing" ? 'active' : ""} onClick={() => manageData("men's-clothing")}>men's-clothing</button>
      <button className={current === "Gown" ? 'active' : ""} onClick={() => manageData("Gown")}>Gown</button>
      <button className={current === "choli" ? 'active' : ""} onClick={() => manageData("choli")}>Choli</button>
      <button className={current === "women's-clothing" ? 'active' : ""} onClick={() => manageData("women's-clothing")}>women's-clothing</button> 
      <div>
        <Box sx={{ display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center'}}>
          {
            filter.map((el, i) => {
              return  (
                <Card ImageCard={el.image} HeadingCard={el.title} product={el.product} Price={el.price} Rating={el.rating} />
              )
            })
          }
        </Box>
      </div>
    </div>
  );
}

export default WomenMain;