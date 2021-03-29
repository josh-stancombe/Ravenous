const apiKey = "Ju-QhgmO6yt3PtAcjHDosU6Wc5fzw_-ibqDGJUt3-smF0-Zd0YUxetBR6QEhR94JTr7-xhtVEmp58CocYqfW_AT6t13hSWVw5KOAlMGrsigZtJq4XxCBqeYix8rgX3Yx";

let yelp = {
    search(term, location, sortBy){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
            {headers: {Authorization: `Bearer ${apiKey}`}}
        ).then( 
            response => { return response.json()}
        ).then( 
            jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business => {
                        return {                       
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        };
                    }));
                }
            }
        )
    }
};

export default yelp;