const Joi = require('joi');

 export const eventValidationSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Le titre est requis.',
      'string.min': 'Le titre doit contenir au moins 3 caractères.',
      'string.max': 'Le titre ne peut pas dépasser 50 caractères.',
    }),
  startDate: Joi.date()
    .required()
    .messages({
      'date.base': 'La date de début doit être une date valide.',
      'any.required': 'La date de début est requise.',
    }),
  endDate: Joi.date()
    .greater(Joi.ref('startDate'))
    .required()
    .messages({
      'date.base': 'La date de fin doit être une date valide.',
      'date.greater': 'La date de fin doit être postérieure à la date de début.',
      'any.required': 'La date de fin est requise.',
    }),
});

