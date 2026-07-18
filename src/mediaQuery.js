class mediaQuery{
    #queryRep = []
    constructor(queryArgs){
        this.queryArgs = Object.values(queryArgs);
    }

    toString(){
        return JSON.stringify(this.#queryRep)
    }

    addTitle(fields = ["romaji"]){
        this.#queryRep.push({"title": [...fields]})
        return this
    }


}

module.exports = {mediaQuery}

/* keeping this just in case
{
        id,
        idMal,
        startDate,
        endDage,
        season,
        seasonYear,
        type,
        format,
        status,
        episodes,
        duration,
        chapters,
        volumes,
        isAdult,
        genre,
        tag,
        minimumTagRank,
        tagCategory,
        onList,
        licencedBy,
        licencedById,
        averageScore,
        popularity,
        source,
        countryOfOrigin,
        isLicenced,
        search,
        id_not,
        id_in,
        id_not_in,
        startDate_greater,
        startDate_lesser,
        endDate_greater,
        endDate_lesser,
        endDate_like,
        format_in,
        format_not,
        format_not_in,
        status_in,
        status_not,
        status_not_in,
        episodes_greater,
        episodes_lesser,
        duration_greater,
        duration_lesser,
        chapters_greater,
        chapters_lesser,
        volumes_greater,
        volumes_lesser,
        genre_in,
        genre_not_in,
        tag_in,
        tag_not_in,
        tagCategory_in,
        tagCategory_not_in,
        licencedBy_in,
        licencedBy_not_in,
        averageScore_greater,
        averageScore_not,
        averageScore_lesser,
        popularity_not,
        popularity_greater,
        popularity_lesser,
        source_in,
        sort
    }*/