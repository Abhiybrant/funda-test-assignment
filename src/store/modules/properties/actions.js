import { proxy, key } from '../../../config';

export default {
  /** This action is used to fetch object detail based on object type and object id */
  async loadProperty(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `${proxy}http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${key}/${payload.propertyType}/${payload.Id}/`,
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to fetch!');
      throw error;
    }
    /** Formatting property reponse, only taking few fields to show on the page */
    const property = {
      id: responseData.Id,
      address: responseData.Adres,
      details: {
        Plaats: responseData.Plaats,
        Postcode: responseData.Postcode,
        PrijsGeformatteerd: responseData.PrijsGeformatteerd,
        PermanenteBewoning: responseData.PermanenteBewoning,
        address: responseData.Adres,
        PerceelOppervlakte: responseData.PerceelOppervlakte ,
        Isolatie: responseData.Isolatie,
        Bouwvorm: responseData.Bouwvorm,
        AantalKamers: responseData.AantalKamers,
        AantalBadkamers: responseData.AantalBadkamers,
        Garage: responseData.Garage,
        GarageIsolatie: responseData.GarageIsolatie,
        GarageVoorzieningen: responseData.GarageVoorzieningen,
        GewijzigdDatum: responseData.GewijzigdDatum
      },
      defaultImage: responseData.HoofdFoto
    };

    /* prepare src set for images */

    let imageSourceData = [];
    if(responseData.Media.length) {
      responseData.Media.forEach(function (mediaItem) {
        let imageSrcArr = [];
        mediaItem.MediaItems.forEach(function (image) {
          imageSrcArr.push(`${image.Url} ${image.Width}w`)
        })
        imageSourceData.push(imageSrcArr.reverse().join(','));
      });
    }

    property.media = imageSourceData;
    context.commit('setProperty', property);
    context.commit('setFetchTimestamp');
  },
  /** Fetching objects list from feeds based on property/object type
   *  By default it provides 15 objects/properties, showing all of them on the page.
  */
  async loadProperties(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `${proxy}http://partnerapi.funda.nl/feeds/Aanbod.svc/${key}/?type=${payload.propertyType}&zo=/${payload.searchQuery}`,
    );

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to fetch!');
      throw error;
    }

    const responseData = await response.text();
    const data = new window.DOMParser().parseFromString(responseData, "text/xml");
    const objects = data.querySelector("Objects");
    const objectsArray = objects.querySelectorAll("Object");
    const propertiesArray = [];

    objectsArray.forEach(function (object) {
      const id = object.querySelector("Id").innerHTML;
      const foto = object.querySelector("Foto").innerHTML;
      const postCode = object.querySelector("Postcode").innerHTML;
      const address = object.querySelector("Adres").innerHTML;
      propertiesArray.push({
        id: id,
        image: foto,
        postCode: postCode,
        address
      })
    })
    context.commit('setProperties', propertiesArray);
    context.commit('setFetchTimestamp');
  }
};
