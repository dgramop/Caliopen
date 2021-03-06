// Copyleft (ɔ) 2017 The Caliopen contributors.
// Use of this source code is governed by a GNU AFFERO GENERAL PUBLIC
// license (AGPL) that can be found in the LICENSE file.

package caliopen

import (
	obj "github.com/CaliOpen/CaliOpen/src/backend/defs/go-objects"
	"github.com/CaliOpen/CaliOpen/src/backend/main/go.backends"
	"github.com/CaliOpen/CaliOpen/src/backend/main/go.backends/store/cassandra"
	log "github.com/Sirupsen/logrus"
	"github.com/gocql/gocql"
	"github.com/nats-io/go-nats"
)

var (
	Facilities *CaliopenFacilities
)

type (
	CaliopenFacilities struct {
		config obj.CaliopenConfig

		RESTfacility *facility

		// NATS facility
		nats *nats.Conn

		// LDA facility
		LDAstore backends.LDAStore
	}

	facility struct {
		store backends.APIStorage
		//RESTindex *backends.APIindex
	}
)

func Initialize(config obj.CaliopenConfig) error {
	Facilities = new(CaliopenFacilities)
	return Facilities.initialize(config)
}

func (facilities *CaliopenFacilities) initialize(config obj.CaliopenConfig) error {
	facilities.config = config

	//REST facility initialization
	facilities.RESTfacility = new(facility)
	switch config.RESTstoreConfig.BackendName {
	case "cassandra":
		cassaConfig := store.CassandraConfig{
			Hosts:       config.RESTstoreConfig.Hosts,
			Keyspace:    config.RESTstoreConfig.Keyspace,
			Consistency: gocql.Consistency(config.RESTstoreConfig.Consistency),
		}
		backend, err := store.InitializeCassandraBackend(cassaConfig)
		if err != nil {
			log.WithError(err).Fatalf("Initalization of %s backend failed", config.RESTstoreConfig.BackendName)
		}
		facilities.RESTfacility.store = backends.APIStorage(backend)
	case "BOBcassandra":
	// NotImplemented… yet ! ;-)
	default:
		log.Fatalf("Unknown backend: %s", config.RESTstoreConfig.BackendName)
	}

	return nil
}
