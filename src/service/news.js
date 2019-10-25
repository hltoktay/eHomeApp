import {
  article_url,
  _api_key,
  category,
  country_code
} from "../config/rest_config";

import AsyncStorage from "@react-native-community/async-storage";

export async function getArticles() {
  try {
    let articles = await fetch(
      `${article_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          "X-API-KEY": _api_key
        }
      }
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  } catch (error) {
    throw error;
  }
}
