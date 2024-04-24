import React, { useEffect, useState } from "react";
import { Flexbox } from "../../../Styles/styled-components";
import { RESTAURENT_TRENDING, Url_Cuisne,Url_Emerging } from "../../../Apis/constant";
import TabNavItem from "../../TAbNavitem/TabNavItem";
import TrendingImageComp from "../../TrendingComp/TrendingImageComp";
import TabContent from "../../TabContent/TabContent";
import "../Tab.css";
import "../../TAbNavitem/TAbNavitem.css";


const TrendingItems = (title) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTrends, setActiveTrends] = useState("Vegan");

  const fetchDatatrendingItem = async () => {
    setLoading(true);
    await fetch(RESTAURENT_TRENDING)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log("trendingitem", data); // Display the fetched data in the console
      })
      .catch((error) => console.error("Error fetching data:", error));
    setLoading(false);
    console.log("TrendingItems", data, { color: title });
  };

  useEffect(() => {
    fetchDatatrendingItem();
  }, []);

  const trending_items = [...new Set(data?.map((item) => item.menu_type_desc))];
  const filteredDataItem = data?.filter(
    (item) => item.trending_items === activeTrends
  );

  console.log("TrendingItems -----", filteredDataItem, trending_items);
  return (
    <Flexbox dir="column">
      {loading ? (
        "Loading..."
      ) : (
        <Flexbox>
          <div className="Tabs">
            <ul className="navx">
              {trending_items.map((item, index) => (
                <TabNavItem
                  key={index}
                  id={item}
                  title={item}
                  activeTab={activeTrends}
                  setActiveTab={setActiveTrends}
                />
              ))}
            </ul>
          </div>
          <div className="latestnews-container">
            <TabContent activeTab={activeTrends}>
              {filteredDataItem?.map((item) => (
                <TrendingImageComp
                  key={item.menu_id}
                  imageUrl={item.menu_image}
                  productName={item.menu_name}
                  disc={item.ingredients}
                />
              ))}
            </TabContent>
          </div>
        </Flexbox>
      )}
    </Flexbox>
  );
};

const TrendingCuisine = (title) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTrends, setActiveTrends] = useState("Asian");

  const fetchDataCuisine = async () => {
    setLoading(true);
    await fetch(Url_Cuisne)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log("trendingCuisine", data); // Display the fetched data in the console
      })
      .catch((error) => console.error("Error fetching data:", error));
    setLoading(false);
  };

  useEffect(() => {
    fetchDataCuisine();
  }, []);

  const trending_items = [...new Set(data?.map((item) => item.menu_type_desc))];
  const filteredDataItem = data?.filter(
    (item) => item.trending_items === activeTrends
  );

  console.log("TrendingItems -----", filteredDataItem, trending_items);
  return (
    <Flexbox dir="column">
      {loading ? (
        "Loading..."
      ) : (
        <Flexbox>
          <div className="Tabs">
            <ul className="navx">
              {trending_items.map((item, index) => (
                <TabNavItem
                  key={index}
                  id={item}
                  title={item}
                  activeTab={activeTrends}
                  setActiveTab={setActiveTrends}
                />
              ))}
            </ul>
          </div>
          <div className="latestnews-container">
            <TabContent activeTab={activeTrends}>
              {filteredDataItem?.map((item) => (
                <TrendingImageComp
                  key={item.menu_id}
                  imageUrl={item.menu_image}
                  productName={item.menu_name}
                  disc={item.ingredients}
                />
              ))}
            </TabContent>
          </div>
        </Flexbox>
      )}
    </Flexbox>
  );
};

const EmergingItems = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTrends, setActiveTrends] = useState("Asian");

  const fetchDataCuisine = async () => {
    setLoading(true);
    await fetch(Url_Emerging)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log("trendingCuisine", data); // Display the fetched data in the console
      })
      .catch((error) => console.error("Error fetching data:", error));
    setLoading(false);
  };

  useEffect(() => {
    fetchDataCuisine();
  }, []);

  const trending_items = [...new Set(data?.map((item) => item.menu_type_desc))];
  const filteredDataItem = data?.filter(
    (item) => item.trending_items === activeTrends
  );

  console.log("TrendingItems -----", filteredDataItem, trending_items);
  return (
    <Flexbox dir="column">
      {loading ? (
        "Loading..."
      ) : (
        <Flexbox>
          <div className="Tabs">
            <ul className="navx">
              {trending_items.map((item, index) => (
                <TabNavItem
                  key={index}
                  id={item}
                  title={item}
                  activeTab={activeTrends}
                  setActiveTab={setActiveTrends}
                />
              ))}
            </ul>
          </div>
          <div className="latestnews-container">
            <TabContent activeTab={activeTrends}>
              {filteredDataItem?.map((item) => (
                <TrendingImageComp
                  key={item.menu_id}
                  imageUrl={item.menu_image}
                  productName={item.menu_name}
                  disc={item.ingredients}
                />
              ))}
            </TabContent>
          </div>
        </Flexbox>
      )}
    </Flexbox>
  );
};
const ItemMenu = {
  "Trending Items": <TrendingItems title="Trending Items" />,
  "Trending Cuisine": <TrendingCuisine title="Trending Cuisine" />,
  "Emerging Items": <EmergingItems title="Emerging Items" />,
};

const TrendingView = () => {
  return (
    <Flexbox dir="column">
      {Object.keys(ItemMenu).map((item) => (
        <Flexbox dir="column">
          <h2>{item}</h2>
          {ItemMenu[item]}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default TrendingView;
