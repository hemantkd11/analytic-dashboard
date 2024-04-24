import React, { useEffect, useState} from "react";
// import he from "he";
import "./Tab.css";
import TabContent from "../TabContent/TabContent";
import TabNavItem from "../TAbNavitem/TabNavItem";
import TrendingImageComp from "../TrendingComp/TrendingImageComp";
import {
  RESTAURENT_TRENDING,
  Url_Cuisne,
  Url_Emerging,
} from "../../Apis/constant";
// import { Flexbox } from "../../Styles/styled-components";
// import TrendingView from "./ItemsView";
// import { useMap } from "react-leaflet";

// const options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };
const Tab = () => {
  const [data, setData] = useState([]);
  const [cuisineData, setCuisineData] = useState([]);
  const [emergingData, setEmergingData] = useState([]);

  const [activeTrends, setActiveTrends] = useState(1);
  const [activeCuisine, setActiveCuisine] = useState(1);
  const [activeEmerging, setActiveEmerging] = useState(1);
  // Top trends

  const fetchDatatrendingItem = async () => {
    await fetch(RESTAURENT_TRENDING)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("trendingitem", data); // Display the fetched data in the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  // Top cuisine

  const fetchDataCuisine = async () => {
    await fetch(Url_Cuisne)
      .then((response) => response.json())
      .then((data) => {
        setCuisineData(data);
        console.log("trendingCuisine", data); // Display the fetched data in the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Top Emerging

  const fetchDataEmerging = async () => {
    await fetch(Url_Emerging)
      .then((response) => response.json())
      .then((data) => {
        setEmergingData(data);
        console.log("emergingitems", data); // Display the fetched data in the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  //
  useEffect(() => {
    fetchDatatrendingItem();
    fetchDataCuisine();
    fetchDataEmerging();
  }, []);

  // trend
  // const trending_items = [...new Set(data?.map((item) => item.menu_type_desc))];
  // const filteredDataItem = data?.filter(
  //   (item) => item.menu_type_desc === activeTrends
  // );

  // const TrendingViewMemo = useMemo( () => {
  //   return <TrendingView />
  // },[])

  // const trending_items = [...new Set(data?.map((item) => item.id))];
  const filteredDataItem = data?.filter((item) => item.id === activeTrends);
  // cuisine
  // const Cuisine_items = [...new Set(cuisineData?.map((item) => item.id))];
  const filteredDataCuisine = cuisineData.filter(
    (item) => item.id === activeCuisine
  );
  //emerging
  // const Emerging_items = [...new Set(emergingData?.map((item) => item.id))];
  const filteredDataEmerging = emergingData.filter(
    (item) => item.id === activeEmerging
  );

  return (
    <div>
      {/* top trend food */}
      <div className="tab-nav-list-container">
        {/* navlist for tab */}
        <div className="top-trend-tap-heading">
          <h2>Trending Items </h2>
        </div>
        {/* 
        <Flexbox dir="column">
          {TrendingViewMemo}
        </Flexbox> */}
        <div className="Tabs">
          <ul className="nav">
            {data.map((item, index) => (
              <TabNavItem
                key={index}
                id={item.id}
                title={item.name}
                activeTab={activeTrends}
                setActiveTab={setActiveTrends}
              />
            ))}
          </ul>
        </div>

        {/* content */}
        <div className="latestnews-container">
          {/* <TabContent activeTab={activeTrends}>
            {filteredDataItem?.map((item) => (
              <TrendingImageComp
                key={item.menu_id}
                imageUrl={item.menu_image}
                productName={item.menu_name}
                disc={item.ingredients}
              />
            ))}
          </TabContent> */}
          <TabContent activeTab={activeTrends}>
            {filteredDataItem?.map((item) =>
              item.ProductDetails.map((menu) => (
                <TrendingImageComp
                  imageUrl={menu.item_image}
                  // imageUrl={newImageUrl}
                  productName={menu.item_name}
                  disc={menu.item_description}
                />
              ))
            )}
          </TabContent>
        </div>
      </div>

      {/* top trend Cusine */}

      <div className="tab-nav-list-container">
        {/* navlist for tab */}
        <div className="top-trend-tap-heading">
          <h2>Trending Cuisine </h2>
        </div>
        <div className="Tabs">
          <ul className="nav">
            {cuisineData.map((item, index) => (
              <TabNavItem
                key={index}
                id={item.id}
                title={item.name}
                activeTab={activeCuisine}
                setActiveTab={setActiveCuisine}
              />
            ))}
          </ul>
        </div>
        {/* content */}
        <div className="latestnews-container">
          {/* <TabContent activeTab={activeCuisine}>
            {filteredDataCuisine?.map((item) => (
              <TrendingImageComp
                key={item.cusinie_menu_id}
                imageUrl={item.cusinie_menu_url}
                productName={item.cusinie_menu_name}
                disc={item.cusinie_menu_description}
              />
            ))}
          </TabContent> */}
          <TabContent activeTab={activeCuisine}>
            {filteredDataCuisine?.map((item) =>
              item.ProductDetails.map((menu) => (
                <TrendingImageComp
                  imageUrl={menu.cusinie_menu_url}
                  productName={menu.cusinie_menu_name}
                  disc={menu.cusinie_menu_description}
                />
              ))
            )}
          </TabContent>
        </div>
      </div>
      {/* emerging items */}
      <div className="tab-nav-list-container">
        {/* navlist for tab */}
        <div className="top-trend-tap-heading">
          <h2>Emerging Items </h2>
        </div>
        <div className="Tabs">
          <ul className="nav">
            {emergingData.map((item, index) => (
              <TabNavItem
                key={index}
                id={item.id}
                title={item.name}
                activeTab={activeEmerging}
                setActiveTab={setActiveEmerging}
              />
            ))}
          </ul>
        </div>
        {/* content */}
        <div className="latestnews-container">
          {/* <TabContent activeTab={activeEmerging}>
            {filteredDataEmerging?.map((item) => (
              <TrendingImageComp
                key={item.menu_id}
                imageUrl={item.emergingItem_menu_url}
                productName={item.cemergingItem_menu_name}
                disc={item.emergingItem_menu_description}
              />
            ))}
          </TabContent> */}
          <TabContent activeTab={activeEmerging}>
            {filteredDataEmerging?.map((item) =>
              item.ProductDetails.map((menu) => (
                <TrendingImageComp
                  imageUrl={menu.emergingItem_menu_url}
                  productName={menu.emergingItem_menu_name}
                  disc={menu.emergingItem_menu_description}
                />
              ))
            )}
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Tab;

// <ul className="nav">
// {Array.isArray(data.TRENDING_FOOD) && data.TRENDING_FOOD.length > 0 ? (
//   data.TRENDING_FOOD.map((List,index)=>(
//     <TabNavItem
//     key={index}
//     id={List.id}
//     title={List.name}
//     activeTab={activeTab}
//     setActiveTab={setActiveTab}
//   />
//   ))
// ):(<>NO list is there</>)}
// </ul>

//{
  /* <div className="outlet">
{data.map((item) => (
  <TabContent key={item} id={item} activeTab={activeTrends}>
    {Array.isArray(item.ProductDetails) &&
    item.ProductDetails.length > 0 ? (
      item.ProductDetails.map((image, index) => (
        <TrendingImageComp
          key={index}
          imageUrl={image.url}
          productName={image.Product}
          disc={image.disc}
        />
      ))
    ) : (
      <div>No Image Found</div>
    )}
  </TabContent>
))}
</div> */
//}

//////////////////////////////////////, {
// , {
//   headers: {
//     "Content-Type": "application/json",
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
// }


        //         // Modify the item_image URLs with the base URL
        //         const modifiedData = data.map(item => ({
        //           ...item,
        //           ProductDetails: item.ProductDetails.map(product => ({
        //             ...product,
        //             item_image:`${NEW_IMAGE_BASE_URL}/${getRestOfTheImagePath(product.item_image)}`,
                  
        //           })),
        //         }));
        // setData(modifiedData);
        // console.log("trendingitem", modifiedData); // Display the fetched data in the console
        // const getRestOfTheImagePath = (originalImagePath) => {
        //   if (!originalImagePath) {
        //     return ''; // Return an empty string if the originalImagePath is null or undefined
        //   }
        //  // Replace the HTML entity &amp; with the actual ampersand &
        // //  const correctedImagePath = originalImagePath.replace(/&amp;/g, '&');
      
        //  // Split the correctedImagePath to get the part after the last slash
        //  const parts = originalImagePath.split('/');
        //  return parts[parts.length - 1];
        // };