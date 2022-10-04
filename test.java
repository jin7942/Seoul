public MAP<String, Object> trans(Dto dto) throws Exception {
	
    Strnig str = dto.getStr();
    Map<String, Object> returnMap = new HashMap<String, Object>();

    String clientId = "PV_PfpxB6fnn9cN4JYSe";//애플리케이션 클라이언트 아이디값";
    String clientSecret = "pBjz_im_VU";//애플리케이션 클라이언트 시크릿값";

    String apiURL = "https://openapi.naver.com/v1/papago/n2mt";
    String text;
    try {
        text = URLEncoder.encode(str, "UTF-8");
    } catch (UnsupportedEncodingException e) {
        throw new RuntimeException("인코딩 실패", e);
    }

    Map<String, String> requestHeaders = new HashMap<>();
    requestHeaders.put("X-Naver-Client-Id", clientId);
    requestHeaders.put("X-Naver-Client-Secret", clientSecret);

    String responseBody = post(apiURL, requestHeaders, text);

    System.out.println(responseBody);
    
    returnMap.put("res", responseBody);

    return returnMap;
}