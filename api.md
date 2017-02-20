## Functions

<dl>
<dt><a href="#getDailyTopVideos">getDailyTopVideos(day)</a> ⇒ <code><a href="#DumpertAPIResponse">Promise.&lt;DumpertAPIResponse&gt;</a></code></dt>
<dd><p>Returns the top 25 videos of a day.</p>
</dd>
<dt><a href="#getLatest">getLatest(page)</a> ⇒ <code><a href="#DumpertAPIResponse">Promise.&lt;DumpertAPIResponse&gt;</a></code></dt>
<dd><p>Returns the latest 15 videos uploaded to Dumpert.</p>
</dd>
<dt><a href="#getComments">getComments(videoID)</a> ⇒ <code><a href="#DumpertCommentsAPIResponse">Promise.&lt;DumpertCommentsAPIResponse&gt;</a></code></dt>
<dd><p>Returns all comments on a video.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#DumpertAPIResponse">DumpertAPIResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#VideoID">VideoID</a> : <code>string</code></dt>
<dd><p>An Dumpert videoID in the form of <code>videoid_videosecret</code>, like <code>6350_7e370664</code></p>
</dd>
<dt><a href="#DumpertVideo">DumpertVideo</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DumpertCommentsAPIResponse">DumpertCommentsAPIResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DumpertCommentsAPIResponseData">DumpertCommentsAPIResponseData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DumpertComment">DumpertComment</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="getDailyTopVideos"></a>

## getDailyTopVideos(day) ⇒ <code>[Promise.&lt;DumpertAPIResponse&gt;](#DumpertAPIResponse)</code>
Returns the top 25 videos of a day.

**Kind**: global function  
**Returns**: <code>[Promise.&lt;DumpertAPIResponse&gt;](#DumpertAPIResponse)</code> - - The response from the DumpertAPI.  

| Param | Type | Description |
| --- | --- | --- |
| day | <code>string</code> | The day to get the top25 of, like 2017-01-26. |

<a name="getLatest"></a>

## getLatest(page) ⇒ <code>[Promise.&lt;DumpertAPIResponse&gt;](#DumpertAPIResponse)</code>
Returns the latest 15 videos uploaded to Dumpert.

**Kind**: global function  
**Returns**: <code>[Promise.&lt;DumpertAPIResponse&gt;](#DumpertAPIResponse)</code> - - The response from the DumpertAPI.  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>number</code> | The page to get results from. |

<a name="getComments"></a>

## getComments(videoID) ⇒ <code>[Promise.&lt;DumpertCommentsAPIResponse&gt;](#DumpertCommentsAPIResponse)</code>
Returns all comments on a video.

**Kind**: global function  
**Returns**: <code>[Promise.&lt;DumpertCommentsAPIResponse&gt;](#DumpertCommentsAPIResponse)</code> - - The response from the Dumpert Comments API.  

| Param | Type | Description |
| --- | --- | --- |
| videoID | <code>[VideoID](#VideoID)</code> | The video to get the comments from |

<a name="DumpertAPIResponse"></a>

## DumpertAPIResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| gentime | <code>number</code> | The datetime the response was generated. |
| debug | <code>object</code> | Debug information from the DumpertAPI. |
| success | <code>boolean</code> | Is `true` if the request was a success. |
| items | <code>[Array.&lt;DumpertVideo&gt;](#DumpertVideo)</code> | All requested Dumpert videos. |

<a name="VideoID"></a>

## VideoID : <code>string</code>
An Dumpert videoID in the form of `videoid_videosecret`, like `6350_7e370664`

**Kind**: global typedef  
<a name="DumpertVideo"></a>

## DumpertVideo : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | A combination of the VideoID and the VideoSecret. |
| title | <code>string</code> | The title of the video |
| thumbnail | <code>string</code> |  |
| still | <code>string</code> |  |
| description | <code>string</code> |  |
| date | <code>string</code> |  |
| tags | <code>string</code> |  |
| nsfw | <code>string</code> |  |
| nopreroll | <code>string</code> |  |
| stats | <code>object</code> |  |
| stills | <code>object</code> |  |
| media | <code>object</code> |  |

<a name="DumpertCommentsAPIResponse"></a>

## DumpertCommentsAPIResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| data | <code>[DumpertCommentsAPIResponseData](#DumpertCommentsAPIResponseData)</code> | 
| status | <code>string</code> | 
| summary | <code>object</code> | 

<a name="DumpertCommentsAPIResponseData"></a>

## DumpertCommentsAPIResponseData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| comments | <code>[Array.&lt;DumpertComment&gt;](#DumpertComment)</code> | 

<a name="DumpertComment"></a>

## DumpertComment : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| approved | <code>boolean</code> | 
| article_id | <code>number</code> | 
| article_link | <code>string</code> | 
| article_title | <code>string</code> | 
| author_is_newbie | <code>boolean</code> | 
| author_username | <code>string</code> | 
| banned | <code>boolean</code> | 
| child_comments | <code>[Array.&lt;DumpertComment&gt;](#DumpertComment)</code> | 
| content | <code>string</code> | 
| creation_datetime | <code>string</code> | 
| display_content | <code>string</code> | 
| id | <code>number</code> | 
| kudos_count | <code>number</code> | 
| parent_id | <code>number</code> | 
| report_count | <code>number</code> | 

