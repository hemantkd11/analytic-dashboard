// const BASE_HOST = 'http://localhost:8010'
// const BASE_HOST = 'https://backend.cuisinecaptain.com'

const BASE_HOST = 'http://127.0.0.1:8000'

// landing page api
// const RESTAURANT = `${BASE_HOST}/restaurant`
// export const RESTAURENT_TRENDING = `${RESTAURANT}/trendingItems`
// export const Url_Cuisne = `${RESTAURANT}/trendingCusinie`
// export const Url_Emerging = `${RESTAURANT}/emergingItems`

// API
const DASHBOARD = `${BASE_HOST}/api/dashboard/sales/topselling?param=`
export const RESTAURENT_TRENDING = `${DASHBOARD}trendingItems`
export const Url_Cuisne = `${DASHBOARD}trendingCusinie`
export const Url_Emerging = `${DASHBOARD}emergingItems`
export const TOP_SELLING_PRODUCTS = `${DASHBOARD}product`
export const TOP_SELLING_CUISINE = `${DASHBOARD}cuisine`
export const TOP_SELLING_AREAWWISE = `${DASHBOARD}itemsByArea`
export const SALES_BY_CHANNEL = `${DASHBOARD}salesByChannel`
export const SALES_BY_CATEGORY = `${DASHBOARD}salesByProduct`
export const SALES_BY_SAGEMANT = `${DASHBOARD}salesByCustomer`
export const FORCASTING_SALES_DATA= `${DASHBOARD}salesByForecasting`
export const FORCASTING_FOR_UPCOMING_DAYS = `${DASHBOARD}salesByForecast`
export const FORCASTING_FOR_PRODUCTS = `${DASHBOARD}demandForecasting`
export const COMPARISON = `${DASHBOARD}salesByComparison`
// user details
export const USER_DETAILS = `${BASE_HOST}/register/`
export const USER_LOGIN = `${BASE_HOST}/login/`
