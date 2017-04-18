export const settings = {
	"analysis": {
		"tokenizer": {
			"ngramizer": {
				"type": "edge_ngram",
				"min_gram": 1,
				"max_gram": 10,
				"token_chars": [
					"letter",
					"digit",
					"punctuation",
					"symbol"
				]
			}
		},
		"analyzer": {
			"auto-suggest": {
				"type": "custom",
				"tokenizer": "ngramizer",
				"filter": [
					"lowercase",
					"asciifolding"
				]
			}
		}
	}
}
