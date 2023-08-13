const mongoose = require('mongoose');

mongoose.Schema.Types.String.set('trim', true);
const healthEventsSchema = new mongoose.Schema(
  {
    eventDate: {
      type: Date,
      default: Date.now,
      min: ['2020-05-05', 'Date must be later than 2020-04-05'],
      max: ['2050-12-31', 'Date must be before 2051-01-01']
    },
    puppy: {
      type: String,
      maxLength: [30, 'PuppyId should be less than 31 characters'],
      minLength: [24, 'PuppyId should be more than 23 characters'],
      lowercase: true
    },
    description: {
      type: String,
      maxLength: [255, 'Exceeded 255 character description.']
    },
    grams: {
      type: Number,
      max: [13600, 'Puppy grams should not exceed 13600']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const HealthEvent = mongoose.model('HealthEvent', healthEventsSchema);

module.exports = HealthEvent;
