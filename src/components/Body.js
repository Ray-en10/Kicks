import React from "react";
import "../css/body.css";
import { Link } from "react-router-dom";


function Body() {
  const sponsors = [
    {
      name: "adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
    },
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    },
    {
      name: "Jordan",
      logo: "https://i.pinimg.com/originals/db/1b/39/db1b39becd09dd051858dfbf31b8f5bb.png",
    },
    {
      name: "Converse",
      logo: "https://download.logo.wine/logo/Converse_(shoe_company)/Converse_(shoe_company)-Logo.wine.png",
    },
    {
      name: "New Balance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/New_balance.png",
    },
  ];
  return (
    <div className="bodypage">
      <div className="firstpart">
        <div className="portfolio">
          <h1>Welcome To The Best Online Sneakers Shop</h1>
          <p>
            KicksHub – your ultimate destination for the latest and most coveted
            kicks! At KicksHub, we take pride in offering a curated selection of
            sneakers that seamlessly blend style, comfort, and innovation.
            Whether you're a sneaker aficionado, a fashion-forward trendsetter,
            or someone in search of that perfect pair, KicksHub has you covered.
          </p>
        </div>
        <img
          className="imgpage"
          src="https://i.pinimg.com/originals/f6/bf/16/f6bf16d8ad827963b8fbfa464b523087.jpg"
          alt="Main"
        />
      </div>
      <div className="secpart">
        <div className="sponsor-list">
          {sponsors.map((sponsor) => (
            <div className="sponsor-item">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="thirdpart">
        <div className="image-grid2">
          <div className="sec2img">
            <div className="dark-overlay">
              <Link to="/Product" className="seemore">
                <h1 className="text">Jordan 1's</h1>
              </Link>
            </div>
            <img
              className="img-grid-item"
              src="https://netmagnetism.files.wordpress.com/2019/03/jordan12-1.jpg?w=798"
              alt="Main"
            />
          </div>
          <div className="sec2img">
            <div className="dark-overlay">
              <Link to="/Product" className="seemore">
                <h1 className="text">Nike Dunk</h1>
              </Link>
            </div>
            <img
              className="img-grid-item"
              src="https://www.sneakers-actus.fr/wp-content/uploads/2017/11/nike-dunk-sb-les-plus-originales.jpg"
              alt="Main"
            />
          </div>
          <div className="sec2img">
            <div className="dark-overlay">
              <Link to="/Product" className="seemore">
                <h1 className="text">adidas</h1>
              </Link>
            </div>
            <img
              className="img-grid-item"
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/920x690/653167_v2.jpg"
              alt="Main"
            />
          </div>
        </div>
      </div>
      <div className="Forthpart">
        <h1>New Collection</h1>
        <br />
        <div className="line3"></div>
      </div>
      <div className="cartsec">
        <div class="card">
          <img
            className="imggrid"
            src="https://img01.ztat.net/article/spp-media-p1/ce7269e6276b4d7ea4cfcdf962a0feee/cd6d38449cd74d75ace2fb6240df111b.jpg?imwidth=1800&filter=packshot"
            alt="Main"
          />
          <div class="card__content">
            <p class="card__title">jordan 1  high</p>
            <p class="card__description">
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="imggrid"
            src="https://newking.be/cdn/shop/files/nSGHtCO6exCieQiF-K2r8qMvm0lJED1SDqJUQqlFSU4.png?v=1691447658"
            alt="Main"
          />
          <div class="card__content">
            <p class="card__title">jordan 1  high</p>
            <p class="card__description">
            </p>
          </div>
        </div>
        
        <div class="card">
          <img
            className="imggrid"
            src="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-retro-high-royal-toe-937705.png?v=1638813031"
            alt="Main"
          />
          <div class="card__content">
            <p class="card__title">jordan 1  high</p>
            <p class="card__description">
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="imggrid"
            src="https://www.sneakers.fr/wp-content/uploads/2022/06/AJ1-chicago-lost-found-DZ5485_612_E_PREM-1160x1160.jpg"
            alt="Main"
          />
          <div class="card__content">
            <p class="card__title">jordan 1  high</p>
            <p class="card__description">
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="imggrid"
            src="https://kikikickz.com/cdn/shop/articles/la-air-jordan-1-high-adopte-a-son-tour-le-style-palomino-974153_800x.progressive.jpg?v=1693575235"
            alt="Main"
          />
          <div class="card__content">
            <p class="card__title">jordan 1  high</p>
            <p class="card__description">
            </p>
          </div>
        </div>
        <div class="card">
          <img
            className="imggrid"
            src="https://heat-stock.com/cdn/shop/products/AJMM_1200x1200.png?v=1613482265"
            alt="Main"
          />
          <div class="card__content">
            <p class="card__title">jordan 1  high</p>
            <p class="card__description">
            </p>
          </div>
        </div>
        <div className="foot"></div>
      </div>
    </div>
  );
}

export default Body;
