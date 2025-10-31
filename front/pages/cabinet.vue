<template>
  <div class="cabinet">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title"/>
      <Meta v-if="data.title" name="twitter:title" :content="data.title"/>
      <Meta v-if="data.description" name="description" :content="data.description"/>
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="og:description" :content="data.description"/>
      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="twitter:description" :content="data.descriptiong"/>
      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
    </Head><Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title"/>
      <Meta v-if="data.title" name="twitter:title" :content="data.title"/>
      <Meta v-if="data.description" name="description" :content="data.description"/>
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="og:description" :content="data.description"/>
      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="twitter:description" :content="data.descriptiong"/>
      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
    </Head>
    <div v-if="data" class="content">
      <h1 class="-h1 mt-20 mb-[100px] text-center lowercase leading-[0.9]">
        {{ data.catchphrase }}
      </h1>
      <div class="pb-20 md:pb-[120px]">
        <div class="block w-[700px] max-w-full sm:max-w-[80%] mx-auto">
          <SanityContent :blocks="data.text" />
        </div>
        
        <svg class="w-[600px] max-w-[80%] justify-self-center mt-20 md:mt-[100px]" width="607" height="259" viewBox="0 0 607 259" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7771 150.08C13.7771 150.08 61.2723 154.664 82.4131 156.699C102.909 158.672 131.172 160.804 150.249 168.551C164.625 174.389 174.984 181.279 182.873 187.367M182.873 187.367C184.405 192.174 183.452 197.932 185.897 202.414C188.482 207.156 189.762 209.126 194.818 211.024C199.962 212.954 204.897 211.657 209.636 208.879C212.512 207.193 216.165 203.262 216.165 203.262M182.873 187.367C182.873 187.367 191.33 185.47 196.623 186.445C201.604 187.363 204.633 188.402 208.484 191.692C212.375 195.018 216.165 203.262 216.165 203.262M216.165 203.262C216.165 203.262 216.725 213.395 220.105 219.111C222.904 223.843 223.558 224.609 228.415 227.185C234.229 230.268 244.687 229.547 244.687 229.547M216.165 203.262C216.165 203.262 223.964 196.083 229.834 192.563C234.96 189.488 237.561 186.528 243.467 185.606C250.928 184.442 257.729 184.308 262.202 190.392C265.341 194.661 263.201 205.287 263.201 205.287M244.687 229.547C244.687 229.547 250.395 239.255 255.042 242.376C260.867 246.288 273.032 244.622 273.032 244.622M244.687 229.547L263.201 205.287M273.032 244.622C273.032 244.622 281.967 254.467 289.249 254.756C297.327 255.078 307.693 246.614 307.693 246.614M273.032 244.622L291.298 220.954M307.693 246.614C307.693 246.614 321.491 254.737 329.351 252.067C337.159 249.415 341.433 234.856 341.433 234.856M307.693 246.614L308.527 229.006C308.527 229.006 307.275 221.004 303.5 218.41C298.835 215.204 291.298 220.954 291.298 220.954M341.433 234.856C341.433 234.856 356.545 237.299 363.106 231.964C367.667 228.256 372.648 215.499 372.648 215.499M341.433 234.856L316.923 212.618M372.648 215.499C372.648 215.499 389.143 214.157 394.835 207.394C401.764 199.16 402.734 187.874 402.734 187.874M372.648 215.499L339.715 187.784M402.734 187.874C402.734 187.874 415.777 189.301 425.474 179.443C435.554 170.999 426.802 156.336 426.802 156.336M402.734 187.874L357.901 154.338M426.802 156.336C426.802 156.336 458.335 154.586 468.336 153.551C499.768 150.295 602.433 153.766 602.433 153.766M426.802 156.336C426.802 156.336 423.202 152.453 415.435 145.589C406.711 137.878 392.99 128.391 392.99 128.391C392.99 128.391 378.9 118.304 369.743 112.111C359.314 105.058 353.638 100.986 342.944 94.3425C336.208 90.1581 332.648 87.2694 325.294 84.3045C317.336 81.0959 303.942 79.1186 303.942 79.1186C303.942 79.1186 299.691 81.6292 296.687 82.4824C292.696 83.6157 288.991 83.5739 286.089 83.1931C283.645 85.3711 282.379 91.2052 278.55 95.2078C271.293 102.794 264.456 106.003 253.958 106.064C248.736 106.095 244.572 107.141 240.837 103.491C239.044 101.739 238.119 100.405 237.589 97.9546C236.445 92.6663 241.789 90.6288 244.554 85.9783C247.146 81.6206 248.936 79.3702 251.291 74.8805C254.552 68.6646 254.39 64.1741 258.236 58.3019C260.799 54.3885 265.966 49.1516 265.966 49.1516L295.315 40.5658M593.751 24.2936L501.043 40.581C501.043 40.581 467.987 45.0291 446.907 48.5272C439.456 49.7636 435.2 50.0819 427.85 51.8193C422.157 53.1648 413.453 55.9498 413.453 55.9498L380.737 48.6485C380.737 48.6485 324.778 33.6986 319.278 33.2042C309.527 32.3278 304.652 38.2132 295.315 40.5658M295.315 40.5658C291.334 40.614 289.154 39.6126 285.174 39.5194C275.148 40.1917 262.758 47.2907 247.921 50.3617C239.651 52.0734 234.837 52.0731 226.572 53.8075C219.771 55.2346 216.236 57.5564 209.31 58.13C201.724 58.7584 189.907 56.2661 189.907 56.2661C189.907 56.2661 127.825 42.5798 88.6852 31.4036C55.2934 21.8687 4 4.28113 4 4.28113M263.201 205.287C263.201 205.287 279.407 191.223 288.157 195.557C293.12 198.016 294.678 200.504 295.188 206.019C295.738 211.969 291.298 220.954 291.298 220.954" stroke="#F3F0E5" stroke-width="8" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="text-center pb-[60px]">
        <ButtonComponent class="-btn" v-if="data.link" :link="data.link.lien" :text="data.link.title" :is_intern="data.link.is_intern" />
      </div>
    </div>
  </div>
</template>
<script setup>
const query = groq`*[_type == "cabinet"] | order(_updatedAt desc)[0]`
const data = await useSanityData({
  query: query,
})
</script>

<style>

</style>