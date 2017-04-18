export const mapping = {
	"listing": {
		"properties": {
			"accommodates": {
				"type": "integer"
			},
			"bathrooms": {
				"type": "double"
			},
			"bed_type": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				}
			},
			"bedrooms": {
				"type": "integer"
			},
			"beds": {
				"type": "integer"
			},
			"date_from": {
				"type": "date",
				"format": "strict_date_optional_time||epoch_millis"
			},
			"date_to": {
				"type": "date",
				"format": "strict_date_optional_time||epoch_millis"
			},
			"has_availability": {
				"type": "boolean"
			},
			"host_image": {
				"type": "string"
			},
			"host_name": {
				"type": "string"
			},
			"image": {
				"type": "string"
			},
			"listing_url": {
				"type": "string"
			},
			"location": {
				"type": "geo_point"
			},
			"name": {
				"type": "string",
				"analyzer": "auto-suggest",
				"search_analyzer": "standard"
			},
			"price": {
				"type": "double"
			},
			"property_type": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				}
			},
			"room_type": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				}
			}
		}
	}
};
