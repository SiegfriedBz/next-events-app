const formatCityName = (name) => {
    return name.split(/\b-\b/)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join("-")
}

export default formatCityName
