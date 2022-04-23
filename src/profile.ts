/** ProfileTypes are the valid `type`s of Profiles. */
export const enum ProfileType {
	/**
	 * A Profile for a cache server (edge-tier or mid-tier). Grove cache
	 * servers, though, should use GROVE_PROFILE instead.
	 */
	ATS_PROFILE = "ATS_PROFILE",
	/** A Profile for a Traffic Router server. */
	TR_PROFILE = "TR_PROFILE",
	/** A Profile for a Traffic Monitor server. */
	TM_PROFILE = "TM_PROFILE",
	/** A Profile for a Traffic Stats server. */
	TS_PROFILE = "TS_PROFILE",
	/** A Profile for a Traffic Portal server. */
	TP_PROFILE = "TP_PROFILE",
	/** A Profile for an InfluxDB instance/server. */
	INFLUXDB_PROFILE = "INFLUXDB_PROFILE",
	/**
	 * A Profile for a Riak KV server.
	 *
	 * @deprecated Riak KV as a back-end for Traffic Vault is deprecated.
	 */
	RIAK_PROFILE = "RIAK_PROFILE",
	/** A Profile for a Splunk server. */
	SPLUNK_PROFILE = "SPLUNK_PROFILE",
	/** A Profile used by Delivery Services, rather than servers. */
	DS_PROFILE = "DS_PROFILE",
	/** A Profile used by Origins and/or origin servers. */
	ORG_PROFILE = "ORG_PROFILE",
	/** A Profile for Kafka servers. */
	KAFKA_PROFILE = "KAFKA_PROFILE",
	/** A Profile for Logstash servers. */
	LOGSTASH_PROFILE = "LOGSTASH_PROFILE",
	/** A Profile for ElasticSearch servers. */
	ES_PROFILE = "ES_PROFILE",
	/** A Profile for any server that doesn't have a more specific Profile type. */
	UNK_PROFILE = "UNK_PROFILE",
	/** A Profile for Grove cache servers. */
	GROVE_PROFILE = "GROVE_PROFILE"
}

/**
 * In responses from certain endpoints, Profiles include these custom
 * representations of their assigned Parameters.
 */
interface ResponseProfileParameter {
	configFile: string;
	id: number;
	lastUpdated: null;
	name: string;
	profiles: null;
	secure: boolean;
	value: string;
}

/** A ResponseProfile is a Profile as given by Traffic Ops in API responses. */
export interface ResponseProfile {
	cdn: number;
	/**
	 * This is null in responses to PUT or POST requests where 'cdnName' was
	 * not given.
	 */
	cdnName: string | null;
	description: string;
	id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	lastUpdated: Date;
	name: string;
	/**
	 * This only appears when a response array contains exactly one Profile,
	 * and when that Profile has at least one assigned Parameter.
	 */
	params?: [ResponseProfileParameter, ...ResponseProfileParameter[]];
	routingDisabled: boolean;
	type: ProfileType;
}

/** RequestProfile is a Profile as required in requests by the Traffic Ops API. */
export interface RequestProfile {
	cdn: number;
	description: string;
	name: string;
	routingDisabled: boolean;
	type: ProfileType;
}

/**
 * A Profile represents, generically, a Profile in the context of either a
 * request to or a response from the Traffic Ops API.
 */
export type Profile = RequestProfile | ResponseProfile;
