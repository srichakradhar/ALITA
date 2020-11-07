var viz;

function draw() {
    var config = {
        container_id: "viz",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
		server_password: "cybersec",
		labels: {
			"source": {
				"caption": "name",
				"size": "pagerank",
				"community": "relation",
			},
			"target": {
				"caption": "name",
				"size": "pagerank",
				"community": "relation",
			}
		},
		relationships: {
			"relation": {
				"thickness": "weight",
				"caption": "name",
				"arrows": true
			}
		},
		initial_cypher: "MATCH (n)-[r:relation]->(m) RETURN * LIMIT 25"
	};

	viz = new NeoVis.default(config);
	viz.render();
}