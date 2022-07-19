const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
        'X-RapidAPI-Key': '993d681e51mshf76c754719a6dacp1220f6jsn8a2d642d6aeb'
    }
};

fetch('https://car-data.p.rapidapi.com/cars/types', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));