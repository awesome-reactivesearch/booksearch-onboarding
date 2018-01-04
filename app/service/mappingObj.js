export const mapping = {
		"good-books-ds": {
		  "properties": {
			"authors": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				},
				"search": {
				  "type": "text",
				  "analyzer": "ngram_analyzer",
				  "search_analyzer": "simple"
				}
			  },
			  "analyzer": "standard"
			},
			"average_rating": {
			  "type": "float"
			},
			"average_rating_rounded": {
			  "type": "integer"
			},
			"books_count": {
			  "type": "integer"
			},
			"id": {
			  "type": "integer"
			},
			"image": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				}
			  },
			  "analyzer": "standard"
			},
			"image_medium": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				}
			  },
			  "analyzer": "standard"
			},
			"isbn": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				}
			  },
			  "analyzer": "standard"
			},
			"language_code": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				}
			  },
			  "analyzer": "standard"
			},
			"original_publication_year": {
			  "type": "integer"
			},
			"original_series": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				},
				"search": {
				  "type": "text",
				  "analyzer": "ngram_analyzer",
				  "search_analyzer": "simple"
				}
			  },
			  "analyzer": "standard"
			},
			"original_title": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				},
				"search": {
				  "type": "text",
				  "analyzer": "ngram_analyzer",
				  "search_analyzer": "simple"
				}
			  },
			  "analyzer": "standard"
			},
			"ratings_count": {
			  "type": "integer"
			},
			"title": {
			  "type": "text",
			  "fields": {
				"autosuggest": {
				  "type": "text",
				  "analyzer": "autosuggest_analyzer",
				  "search_analyzer": "simple"
				},
				"raw": {
				  "type": "keyword"
				},
				"search": {
				  "type": "text",
				  "analyzer": "ngram_analyzer",
				  "search_analyzer": "simple"
				}
			  },
			  "analyzer": "standard"
			}
		  }
		}
	}
