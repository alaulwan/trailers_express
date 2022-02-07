-   **What is the default URL to your application?**

<http://localhost:3000>

________________________________________________________________________________
-   **How to run:**
1.   **Using docker:**

```    -   git clone https://github.com/alaulwan/trailers_express.git ```

```    -   cd trailers_express ```

```    -   docker build . -t viaplay_tmdb_trailers ```

```    -   docker run -p 3000:3000 -e tmdb_api_Key={your_key} viaplay_tmdb_trailers ```
________________________________________________________________________________
2.  **Without docker:**

```    -   git clone https://github.com/alaulwan/trailers_express.git ```

```    -   cd trailers_express ```

```    -   npm install --production  ```

```    -   export tmdb_api_Key={your_key}  ```

```    -   npm start ```

________________________________________________________________________________
-  **Run Unit Test:**

```    -   npm install  ```

```    -   npm test ```

________________________________________________________________________________
API Example:

```    GET http://localhost:3000/api/v1/trailers?viaplayLink=https://content.viaplay.se/pcdash-se/film/focus-2015 ```
