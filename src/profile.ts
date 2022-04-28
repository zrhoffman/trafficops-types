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
 *
 * This is **not** the response to a {@link RequestProfileParameter}.
 */
interface ResponseProfileParameter {
	configFile: string;
	readonly id: number;
	readonly lastUpdated: null;
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
	readonly lastUpdated: Date;
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

/**
 * A RequestParameter is a Parameter as given in PUT and POST requests to
 * /parameters.
 */
export interface RequestParameter {
	configFile: string;
	name: string;
	secure: boolean;
	/** @default "" */
	value?: string | null;
}

/**
 * A ResponseParameter is a Parameter as given by Traffic Ops in its API
 * responses.
 */
export interface ResponseParameter {
	configFile: string;
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	name: string;
	profiles: Array<string> | null;
	secure: boolean;
	value: string;
}

/**
 * A Parameter generically represents a Parameter, either in request format or
 * response format.
 */
export type Parameter = RequestParameter | ResponseParameter;

/**
 * Represents a request to associate a Parameter with zero or more Profiles.
 */
export interface RequestParameterProfile {
	paramId: number;
	profileIds: Array<number>;
	/** @default false */
	replace?: boolean | null;
}

/**
 * The response to a {@link RequestParameterProfile}.
 */
export interface RequestParameterProfileResponse {
	paramId: number;
	profileIds: Array<number>;
	replace: boolean;
}

/**
 * A ProfileParameter represents the association of a Parameter to zero or more
 * Profiles.
 *
 * This is redundant with {@link ProfileParameter} and with
 * {@link ProfileParameters}. It is suggested that clients choose which API
 * endpoint they'd like to use, which will dictate which of these
 * representations is appropriate.
 */
export type ParameterProfile = RequestParameterProfile | RequestParameterProfileResponse;

/**
 * Represents a request to associate a Profile with zero or more Parameters.
 */
export interface RequestProfileParameter {
	profileId: number;
	paramIds: Array<number>;
	/** @default false */
	replace?: boolean | null;
}

/**
 * The response to a {@link RequestProfileParameter}.
 */
export interface RequestProfileParameterResponse {
	profileId: number;
	paramIds: Array<number>;
	replace: boolean;
}

/**
 * A ProfileParameter represents the association of a Profile to zero or more
 * Parameters.
 *
 * This is redundant with {@link ProfileParameters} and with
 * {@link ParameterProfile}. It is suggested that clients choose which API
 * endpoint they'd like to use, which will dictate which of these
 * representations is appropriate.
 */
export type ProfileParameter = RequestProfileParameter | RequestProfileParameterResponse;

/**
 * Represents an association between a single Profile and a single Parameter, as
 * required by Traffic Ops in requests to its `/profileparameters` API endpoint.
 */
export interface RequestProfileParameters {
	parameterId: number;
	profileId: number;
}

/**
 * The response to a {@link RequestProfileParameters}.
 */
export interface RequestProfileParametersResponse {
	/**
	 * @deprecated This is always `null` and has no practical use, so it'll
	 * probably wind up getting removed at some point in the future.
	 */
	readonly lastUpdated: null;
	/** @deprecated This value has unknown meaning and no real use. */
	parameter: string | null;
	parameterId: number;
	profileId: number;
	profile: string | null;
}

/**
 * Represents an association between a single Profile and a single Parameter, as
 * presented by Traffic Ops in responses to GET requests made to the
 * `/profileparameters` endpoint of its API.
 */
export interface ResponseProfileParameters {
	readonly lastUpdated: Date;
	profile: string;
	parameter: number;
}

/**
 * A ProfileParameters represents the association between a Profile and a
 * Parameter.
 *
 * This is redundant with {@link ProfileParameter} and with
 * {@link ParameterProfile}. It is suggested that clients choose which API
 * endpoint they'd like to use, which will dictate which of these
 * representations is appropriate.
 */
export type ProfileParameters = RequestProfileParameters | RequestProfileParametersResponse | ResponseProfileParameters;

/**
 * A ProfileImport is the format required by Traffic Ops to import Profiles
 * through its `/profiles/import` endpoint.
 */
export interface ProfileImport {
	profile: {
		cdn: string;
		description: string;
		name: string;
		type: ProfileType;
	};
	parameters: Array<{
		// eslint-disable-next-line @typescript-eslint/naming-convention
		config_file: string;
		name: string;
		value: string;
	}>;
}

/**
 * An exported Profile is enough information to reconstruct the Profile at a
 * later time and/or in a different ATC system using the `/profiles/import` API
 * endpoint.
 */
export interface ProfileExport extends ProfileImport{
	/**
	 * @deprecated This field exists by mistake and will be removed in the
	 * future. Refer to
	 * {@link https://github.com/apache/trafficcontrol/issues/6797 #6797} for
	 * details/progress updates.
	 */
	 alerts: null;
}

/**
 * This is a response from Traffic Ops to a request to copy a Profile.
 */
export interface ProfileCopyResponse {
	description: string;
	idCopyFrom: number;
	/** The ID of the newly created copy Profile. */
	id: number;
	name: string;
	profileCopyFrom: string;
}
