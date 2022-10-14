# cornAllergenIdentifier

This website accepts a barcode and uses it to fetch ingredient information from [Open Food Facts Database](https://world.openfoodfacts.org/data). It then compares ingredients to a list of corn allergen ingredients and indicates if an ingredient may contribute to an allergy. 

![project-image03](https://user-images.githubusercontent.com/102367926/182495927-6af46b4a-ccf8-476d-b819-e639ec0ecabc.png)

### How It's Made
Tech used: HTML, CSS, client side Javascript.

This project initially was designed to get comfortable with fetching information from APIs and digesting information in the form of JSON. While I was working on it I noticed that it had allergen information included in the API, but only for most common allergens (soy, egg, milk, tree nuts"). I have friends with unusual allergies so I wanted a project that would be helpful for them. I struggled trying to check more than one ingredient. Corn is obvious in corn starch or corn oil, but less so as maltodextrin. 

### Optimizations
Figuring out best method for comparison to improve processing time on large ingredient sets. Re-ordering ingredient array so most frequent ingredients are lower indexed. 

### Lessons learned 
This was intended as a learning project! This was an initial foray into using fetch and dealing with APIs developed and maintained by others. Learning to navigate JSON and get keys for data I wanted/needed was a major portion of this project and the initial reason I developed it. I also worked to solidify and understanding of OOP with most of the code in one object. I also worked on a small but important piece to run a comparison on each ingredient to identify corn products requiring an array. My initial attempt was to use a string of turnary statements which was running, but not particularly efficient. 
