import Ember from 'ember';

const { isPresent, get } = Ember;

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    fetchHotel(hotelId, roomId){
      if (isPresent(hotelId) && isPresent(roomId)) {
        this.get('ajax').request(`/hotels/${hotelId}/rooms/${roomId}`).then((result) => {
          this.set('hotel', get(result, `hotels.firstObject`));
        });
      }
    }
  }
});
