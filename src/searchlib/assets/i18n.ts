const es = {
    _locale: 'es',
    errors: {
        no_url: "No se ha ingresado una URL!!!",
        not_found: 'No se econtró.',
        wrong_url: 'Ha ocurrido un error con la URL'
    },
    labels: {
        departure: "Origen",
        arrival: "Destino",
        start: "Fecha de salida",
        end: "Fecha de regreso",
        passengers: "Pasajeros"
    }
}

const en = {
    _locale: 'en',
    errors: {
        no_url: "Enter an URL!!!",
        not_found: "Nothing found.",
        wrong_url: "There was a problem with the URL"
    },
    labels: {
        departure: "Origin",
        arrival: "Destination",
        start: "Departing date",
        end: "Return date",
        passengers: "Passenger"
    }
}

const useLang = (locale = 'es') => {
    if(locale === 'es') return es
    return en
}