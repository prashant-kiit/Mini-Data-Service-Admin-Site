import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

// Define the Geo sub-schema
const GeoSchema = new Schema({
  lat: String,
  lng: String
});

// Define the Address sub-schema
const AddressSchema = new Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: GeoSchema
});

// Define the Company sub-schema
const CompanySchema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String
});

const FeedDateTime = new Schema({
  year: Number,
  month: Number,
  day: Number,
  hours: Number,
  minutes: Number,
  seconds: Number
});

// Define the main schema
const UserdetailsSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: AddressSchema,
  phone: String,
  website: String,
  company: CompanySchema,
  feeddatetime: FeedDateTime
});

// Create and export the model
const Userdetails = model('Userdetails', UserdetailsSchema);

export default Userdetails;
