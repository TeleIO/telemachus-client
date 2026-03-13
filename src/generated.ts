// Auto-generated from api-schema.json — do not edit
// Run `bun run generate` to regenerate

import type { TeleClient } from "./client.js";

/** All known Telemachus API keys */
export type TelemetryKey =
  | "alarm.count"
  | "alarm.list"
  | "alarm.nextAlarm"
  | "alarm.timeToNext"
  | "astg.available"
  | "astg.active"
  | "astg.errorCondition"
  | "astg.retrogradeOrbit"
  | "astg.hyperbolicOrbit"
  | "astg.transferCount"
  | "astg.transfers"
  | "astg.transfer"
  | "astg.activeTransfer"
  | "astg.nextDeltaV"
  | "astg.nextDestination"
  | "astg.nextBurnTime"
  | "astg.nextBurnCountdown"
  | "astg.createManeuver"
  | "astg.warpToBurn"
  | "dv.ready"
  | "dv.totalDVVac"
  | "dv.totalDVASL"
  | "dv.totalDVActual"
  | "dv.totalBurnTime"
  | "dv.stageCount"
  | "dv.stage"
  | "dv.stages"
  | "dv.stageDVVac"
  | "dv.stageDVASL"
  | "dv.stageDVActual"
  | "dv.stageTWRVac"
  | "dv.stageTWRASL"
  | "dv.stageTWRActual"
  | "dv.stageISPVac"
  | "dv.stageISPASL"
  | "dv.stageISPActual"
  | "dv.stageThrustVac"
  | "dv.stageThrustASL"
  | "dv.stageThrustActual"
  | "dv.stageBurnTime"
  | "dv.stageMass"
  | "dv.stageDryMass"
  | "dv.stageFuelMass"
  | "dv.stageStartMass"
  | "dv.stageEndMass"
  | "far.available"
  | "far.liftCoeff"
  | "far.dragCoeff"
  | "far.refArea"
  | "far.ballisticCoeff"
  | "far.dynPres"
  | "far.termVel"
  | "far.tsfc"
  | "far.aoa"
  | "far.sideslip"
  | "far.stallFrac"
  | "far.flapSetting"
  | "far.spoiler"
  | "far.increaseFlaps"
  | "far.decreaseFlaps"
  | "far.setSpoilers"
  | "far.voxelized"
  | "v.setYaw"
  | "v.setPitch"
  | "v.setRoll"
  | "v.setFbW"
  | "v.setPitchYawRollXYZ"
  | "v.setAttitude"
  | "v.setTranslation"
  | "f.throttle"
  | "f.pitchInput"
  | "f.yawInput"
  | "f.rollInput"
  | "f.xInput"
  | "f.yInput"
  | "f.zInput"
  | "f.pitchTrim"
  | "f.yawTrim"
  | "f.rollTrim"
  | "f.isNeutral"
  | "f.killRot"
  | "v.rcsValue"
  | "v.sasValue"
  | "v.lightValue"
  | "v.brakeValue"
  | "v.gearValue"
  | "v.abortValue"
  | "v.ag1Value"
  | "v.ag2Value"
  | "v.ag3Value"
  | "v.ag4Value"
  | "v.ag5Value"
  | "v.ag6Value"
  | "v.ag7Value"
  | "v.ag8Value"
  | "v.ag9Value"
  | "v.ag10Value"
  | "v.precisionControlValue"
  | "f.sasMode"
  | "f.sasEnabled"
  | "f.setSASMode"
  | "f.setPitchTrim"
  | "f.setYawTrim"
  | "f.setRollTrim"
  | "kerbalism.available"
  | "kerbalism.features"
  | "kerbalism.radiationEnabled"
  | "kerbalism.radiation"
  | "kerbalism.habitatRadiation"
  | "kerbalism.magnetosphere"
  | "kerbalism.innerBelt"
  | "kerbalism.outerBelt"
  | "kerbalism.stellarActivity"
  | "kerbalism.habitatVolume"
  | "kerbalism.habitatSurface"
  | "kerbalism.habitatPressure"
  | "kerbalism.co2Level"
  | "kerbalism.radiationShielding"
  | "kerbalism.habitatLivingSpace"
  | "kerbalism.habitatComfort"
  | "kerbalism.connectionLinked"
  | "kerbalism.connectionRate"
  | "kerbalism.connectionTransmitting"
  | "kerbalism.connection"
  | "kerbalism.experimentRunning"
  | "kerbalism.stellarStormIncoming"
  | "kerbalism.stellarStormInProgress"
  | "kerbalism.stellarStormState"
  | "kerbalism.stellarStormDuration"
  | "kerbalism.stellarStormStartTime"
  | "kerbalism.envTemperature"
  | "kerbalism.envTempDiff"
  | "kerbalism.envStormRadiation"
  | "kerbalism.breathable"
  | "kerbalism.inAtmosphere"
  | "kerbalism.malfunction"
  | "kerbalism.critical"
  | "kerbalism.solarExposure"
  | "kerbalism.drivesFreeSpace"
  | "kerbalism.drivesCapacity"
  | "kerbalism.crew"
  | "land.timeToImpact"
  | "land.speedAtImpact"
  | "land.bestSpeedAtImpact"
  | "land.suicideBurnCountdown"
  | "land.predictedLat"
  | "land.predictedLon"
  | "land.predictedAlt"
  | "land.slopeAngle"
  | "mj.available"
  | "t.universalTime"
  | "t.currentRate"
  | "t.currentRateIndex"
  | "t.warpMode"
  | "t.maxPhysicsRate"
  | "t.deltaTime"
  | "t.isPaused"
  | "tar.name"
  | "tar.type"
  | "tar.distance"
  | "tar.groundDistance"
  | "tar.o.relativeVelocity"
  | "tar.o.velocity"
  | "tar.o.PeA"
  | "tar.o.ApA"
  | "tar.o.timeToAp"
  | "tar.o.timeToPe"
  | "tar.o.inclination"
  | "tar.o.eccentricity"
  | "tar.o.period"
  | "tar.o.argumentOfPeriapsis"
  | "tar.o.relativeInclination"
  | "tar.o.timeToTransition1"
  | "tar.o.timeToTransition2"
  | "tar.o.sma"
  | "tar.o.lan"
  | "tar.o.maae"
  | "tar.o.timeOfPeriapsisPassage"
  | "tar.o.trueAnomaly"
  | "tar.o.orbitingBody"
  | "tar.o.orbitPatches"
  | "tar.o.trueAnomalyAtUTForOrbitPatch"
  | "tar.o.UTForTrueAnomalyForOrbitPatch"
  | "tar.o.relativePositionAtTrueAnomalyForOrbitPatch"
  | "tar.o.relativePositionAtUTForOrbitPatch"
  | "tar.setTargetBody"
  | "tar.setTargetVessel"
  | "tar.clearTarget"
  | "dock.ax"
  | "dock.ay"
  | "dock.az"
  | "dock.x"
  | "dock.y"
  | "principia.available"
  | "principia.version"
  | "principia.active"
  | "principia.analysisProgress"
  | "principia.missionDuration"
  | "o.mean.sma"
  | "o.mean.eccentricity"
  | "o.mean.inclination"
  | "o.mean.lan"
  | "o.mean.argumentOfPeriapsis"
  | "o.mean.PeA"
  | "o.mean.ApA"
  | "o.mean.smaRange"
  | "o.mean.eccentricityRange"
  | "o.mean.inclinationRange"
  | "o.mean.PeARange"
  | "o.mean.ApARange"
  | "o.mean.siderealPeriod"
  | "o.mean.nodalPeriod"
  | "o.mean.anomalisticPeriod"
  | "o.mean.nodalPrecession"
  | "o.mean.recurrence"
  | "principia.plan.count"
  | "principia.plan.guidance"
  | "principia.plan.burns"
  | "principia.plan.burn"
  | "principia.analysis"
  | "rc.available"
  | "rc.count"
  | "rc.anyDeployed"
  | "rc.safeState"
  | "rc.chutes"
  | "rc.deploy"
  | "rc.cut"
  | "rc.arm"
  | "rc.disarm"
  | "s.sensor"
  | "s.sensor.temp"
  | "s.sensor.pres"
  | "s.sensor.grav"
  | "s.sensor.acc"
  | "r.resource"
  | "r.resourceCurrent"
  | "r.resourceCurrentMax"
  | "r.resourceMax"
  | "r.resourceNameList"
  | "sci.count"
  | "sci.dataAmount"
  | "sci.experiments"
  | "career.funds"
  | "career.reputation"
  | "career.science"
  | "career.mode"
  | "comm.connected"
  | "comm.signalStrength"
  | "comm.controlState"
  | "comm.controlStateName"
  | "comm.signalDelay"
  | "p.paused"
  | "a.version"
  | "a.mods"
  | "a.physicsMode"
  | "a.schema"
  | "therm.hottestPartTemp"
  | "therm.hottestPartTempKelvin"
  | "therm.hottestPartMaxTemp"
  | "therm.hottestPartTempRatio"
  | "therm.hottestPartName"
  | "therm.hottestEngineTemp"
  | "therm.hottestEngineMaxTemp"
  | "therm.hottestEngineTempRatio"
  | "therm.anyEnginesOverheating"
  | "therm.heatShieldTemp"
  | "therm.heatShieldTempCelsius"
  | "therm.heatShieldFlux"
  | "v.altitude"
  | "v.heightFromTerrain"
  | "v.heightFromSurface"
  | "v.terrainHeight"
  | "v.pqsAltitude"
  | "v.long"
  | "v.lat"
  | "v.surfaceVelocity"
  | "v.surfaceVelocityx"
  | "v.surfaceVelocityy"
  | "v.surfaceVelocityz"
  | "v.orbitalVelocity"
  | "v.orbitalVelocityx"
  | "v.orbitalVelocityy"
  | "v.orbitalVelocityz"
  | "v.surfaceSpeed"
  | "v.verticalSpeed"
  | "v.speed"
  | "v.srfSpeed"
  | "v.obtSpeed"
  | "v.angularVelocity"
  | "v.angularVelocityx"
  | "v.angularVelocityy"
  | "v.angularVelocityz"
  | "v.geeForce"
  | "v.geeForceImmediate"
  | "v.acceleration"
  | "v.accelerationx"
  | "v.accelerationy"
  | "v.accelerationz"
  | "v.specificAcceleration"
  | "v.perturbation"
  | "v.perturbationx"
  | "v.perturbationy"
  | "v.perturbationz"
  | "v.mass"
  | "v.angularMomentum"
  | "v.angularMomentumx"
  | "v.angularMomentumy"
  | "v.angularMomentumz"
  | "v.momentOfInertia"
  | "v.CoM"
  | "v.atmosphericDensity"
  | "v.dynamicPressurekPa"
  | "v.dynamicPressure"
  | "v.staticPressurekPa"
  | "v.staticPressure"
  | "v.atmosphericPressurePa"
  | "v.atmosphericPressure"
  | "v.atmosphericTemperature"
  | "v.externalTemperature"
  | "v.mach"
  | "v.speedOfSound"
  | "v.indicatedAirSpeed"
  | "v.directSunlight"
  | "v.distanceToSun"
  | "v.solarFlux"
  | "v.name"
  | "v.body"
  | "v.situation"
  | "v.situationString"
  | "v.vesselType"
  | "v.landed"
  | "v.splashed"
  | "v.landedOrSplashed"
  | "v.landedAt"
  | "v.biome"
  | "v.biomeLocalized"
  | "v.isEVA"
  | "v.isActiveVessel"
  | "v.isControllable"
  | "v.isCommandable"
  | "v.missionTime"
  | "v.missionTimeString"
  | "v.launchTime"
  | "v.currentStage"
  | "v.crewCount"
  | "v.crewCapacity"
  | "v.crew"
  | "v.upAxis"
  | "v.terrainNormal"
  | "v.loaded"
  | "v.packed"
  | "v.angleToPrograde"
  | "o.PeA"
  | "o.ApA"
  | "o.PeR"
  | "o.ApR"
  | "o.timeToAp"
  | "o.timeToPe"
  | "o.inclination"
  | "o.eccentricity"
  | "o.sma"
  | "o.semiMinorAxis"
  | "o.semiLatusRectum"
  | "o.lan"
  | "o.argumentOfPeriapsis"
  | "o.epoch"
  | "o.period"
  | "o.trueAnomaly"
  | "o.meanAnomaly"
  | "o.eccentricAnomaly"
  | "o.maae"
  | "o.timeOfPeriapsisPassage"
  | "o.orbitPercent"
  | "o.relativeVelocity"
  | "o.orbitalSpeed"
  | "o.vel"
  | "o.radius"
  | "o.pos"
  | "o.orbitalEnergy"
  | "o.orbitNormal"
  | "o.eccVec"
  | "o.anVec"
  | "o.h"
  | "o.referenceBody"
  | "o.nextApsisType"
  | "o.timeToNextApsis"
  | "o.timeToTransition1"
  | "o.timeToTransition2"
  | "o.patchStartTransition"
  | "o.patchEndTransition"
  | "o.StartUT"
  | "o.EndUT"
  | "o.UTsoi"
  | "o.closestEncounterBody"
  | "o.closestTgtApprUT"
  | "o.encounterExists"
  | "o.encounterBody"
  | "o.encounterTime"
  | "o.orbitalSpeedAt"
  | "o.orbitalSpeedAtDistance"
  | "o.radiusAtTrueAnomaly"
  | "o.trueAnomalyAtRadius"
  | "o.orbitPatches"
  | "o.trueAnomalyAtUTForOrbitPatch"
  | "o.UTForTrueAnomalyForOrbitPatch"
  | "o.relativePositionAtTrueAnomalyForOrbitPatch"
  | "o.relativePositionAtUTForOrbitPatch"
  | "n.heading2"
  | "n.pitch2"
  | "n.roll2"
  | "n.rawheading2"
  | "n.rawpitch2"
  | "n.rawroll2"
  | "n.heading"
  | "n.pitch"
  | "n.roll"
  | "n.rawheading"
  | "n.rawpitch"
  | "n.rawroll"
  | "b.name"
  | "b.description"
  | "b.number"
  | "b.index"
  | "b.referenceBody"
  | "b.orbitingBodies"
  | "b.radius"
  | "b.mass"
  | "b.geeASL"
  | "b.soi"
  | "b.hillSphere"
  | "b.rotationPeriod"
  | "b.rotationAngle"
  | "b.angularV"
  | "b.tidallyLocked"
  | "b.rotates"
  | "b.atmosphere"
  | "b.maxAtmosphere"
  | "b.atmosphereContainsOxygen"
  | "b.ocean"
  | "b.position"
  | "b.timeWarpAltitudeLimits"
  | "b.o.gravParameter"
  | "b.o.relativeVelocity"
  | "b.o.PeA"
  | "b.o.ApA"
  | "b.o.timeToAp"
  | "b.o.timeToPe"
  | "b.o.inclination"
  | "b.o.eccentricity"
  | "b.o.period"
  | "b.o.argumentOfPeriapsis"
  | "b.o.timeToTransition1"
  | "b.o.timeToTransition2"
  | "b.o.sma"
  | "b.o.lan"
  | "b.o.maae"
  | "b.o.timeOfPeriapsisPassage"
  | "b.o.trueAnomaly"
  | "b.o.phaseAngle"
  | "b.o.truePositionAtUT"
  | "m.mapIsEnabled"
  | "o.maneuverNodes"
  | "o.maneuverNodes.count"
  | "o.maneuverNodes.deltaV"
  | "o.maneuverNodes.deltaVMagnitude"
  | "o.maneuverNodes.UT"
  | "o.maneuverNodes.timeTo"
  | "o.maneuverNodes.burnVector"
  | "o.maneuverNodes.orbitPatches"
  | "o.maneuverNodes.trueAnomalyAtUTForManeuverNodesOrbitPatch"
  | "o.maneuverNodes.UTForTrueAnomalyForManeuverNodesOrbitPatch"
  | "o.maneuverNodes.relativePositionAtTrueAnomalyForManeuverNodesOrbitPatch"
  | "o.maneuverNodes.relativePositionAtUTForManeuverNodesOrbitPatch"
  | "o.addManeuverNode"
  | "o.updateManeuverNode"
  | "o.removeManeuverNode"
  | "o.gameLanguage";

/** alarm telemetry */
export class AlarmApi {
  constructor(private readonly client: TeleClient) {}

  /** Number of Active Alarms */
  alarmCount(): Promise<number> {
    return this.client.query("alarm.count") as Promise<number>;
  }

  /** All Alarms */
  alarmList(): Promise<Record<string, unknown>> {
    return this.client.query("alarm.list") as Promise<Record<string, unknown>>;
  }

  /** Next Alarm to Trigger */
  alarmNextAlarm(): Promise<Record<string, unknown>> {
    return this.client.query("alarm.nextAlarm") as Promise<
      Record<string, unknown>
    >;
  }

  /** Time Until Next Alarm (TIME) */
  alarmTimeToNext(): Promise<number> {
    return this.client.query("alarm.timeToNext") as Promise<number>;
  }
}

/** body telemetry */
export class BodyApi {
  constructor(private readonly client: TeleClient) {}

  /** Body Name (STRING) */
  bName(...args: (string | number)[]): Promise<string> {
    return this.client.query("b.name", ...args) as Promise<string>;
  }

  /** Body Description (STRING) */
  bDescription(...args: (string | number)[]): Promise<string> {
    return this.client.query("b.description", ...args) as Promise<string>;
  }

  /** Number of Bodies */
  bNumber(): Promise<number> {
    return this.client.query("b.number") as Promise<number>;
  }

  /** Flight Globals Index */
  bIndex(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.index", ...args) as Promise<number>;
  }

  /** Reference Body Name (STRING) */
  bReferenceBody(...args: (string | number)[]): Promise<string> {
    return this.client.query("b.referenceBody", ...args) as Promise<string>;
  }

  /** Orbiting Body Names */
  bOrbitingBodies(...args: (string | number)[]): Promise<string[]> {
    return this.client.query("b.orbitingBodies", ...args) as Promise<string[]>;
  }

  /** Body Radius (DISTANCE) */
  bRadius(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.radius", ...args) as Promise<number>;
  }

  /** Body Mass */
  bMass(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.mass", ...args) as Promise<number>;
  }

  /** Surface Gravity in G (G) */
  bGeeASL(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.geeASL", ...args) as Promise<number>;
  }

  /** Body Sphere of Influence (DISTANCE) */
  bSoi(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.soi", ...args) as Promise<number>;
  }

  /** Hill Sphere Radius (DISTANCE) */
  bHillSphere(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.hillSphere", ...args) as Promise<number>;
  }

  /** Rotation Period (TIME) */
  bRotationPeriod(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.rotationPeriod", ...args) as Promise<number>;
  }

  /** Current Rotation Angle (DEG) */
  bRotationAngle(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.rotationAngle", ...args) as Promise<number>;
  }

  /** Angular Velocity */
  bAngularV(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.angularV", ...args) as Promise<number>;
  }

  /** Tidally Locked */
  bTidallyLocked(...args: (string | number)[]): Promise<boolean> {
    return this.client.query("b.tidallyLocked", ...args) as Promise<boolean>;
  }

  /** Body Rotates */
  bRotates(...args: (string | number)[]): Promise<boolean> {
    return this.client.query("b.rotates", ...args) as Promise<boolean>;
  }

  /** Has Atmosphere */
  bAtmosphere(...args: (string | number)[]): Promise<boolean> {
    return this.client.query("b.atmosphere", ...args) as Promise<boolean>;
  }

  /** Body Atmosphere Depth (DISTANCE) */
  bMaxAtmosphere(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.maxAtmosphere", ...args) as Promise<number>;
  }

  /** Atmosphere contains oxygen */
  bAtmosphereContainsOxygen(...args: (string | number)[]): Promise<boolean> {
    return this.client.query(
      "b.atmosphereContainsOxygen",
      ...args,
    ) as Promise<boolean>;
  }

  /** Has Ocean */
  bOcean(...args: (string | number)[]): Promise<boolean> {
    return this.client.query("b.ocean", ...args) as Promise<boolean>;
  }

  /** Body World Position */
  bPosition(...args: (string | number)[]): Promise<unknown> {
    return this.client.query("b.position", ...args) as Promise<unknown>;
  }

  /** Time Warp Altitude Limits */
  bTimeWarpAltitudeLimits(
    ...args: (string | number)[]
  ): Promise<Record<string, unknown>> {
    return this.client.query("b.timeWarpAltitudeLimits", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** Body Gravitational Parameter (GRAV) */
  bOGravParameter(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.gravParameter", ...args) as Promise<number>;
  }

  /** Relative Velocity (VELOCITY) */
  bORelativeVelocity(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "b.o.relativeVelocity",
      ...args,
    ) as Promise<number>;
  }

  /** Periapsis (DISTANCE) */
  bOPeA(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.PeA", ...args) as Promise<number>;
  }

  /** Apoapsis (DISTANCE) */
  bOApA(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.ApA", ...args) as Promise<number>;
  }

  /** Time to Apoapsis (TIME) */
  bOTimeToAp(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.timeToAp", ...args) as Promise<number>;
  }

  /** Time to Periapsis (TIME) */
  bOTimeToPe(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.timeToPe", ...args) as Promise<number>;
  }

  /** Inclination (DEG) */
  bOInclination(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.inclination", ...args) as Promise<number>;
  }

  /** Eccentricity */
  bOEccentricity(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.eccentricity", ...args) as Promise<number>;
  }

  /** Orbital Period (TIME) */
  bOPeriod(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.period", ...args) as Promise<number>;
  }

  /** Argument of Periapsis (DEG) */
  bOArgumentOfPeriapsis(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "b.o.argumentOfPeriapsis",
      ...args,
    ) as Promise<number>;
  }

  /** Time to Transition 1 (TIME) */
  bOTimeToTransition1(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "b.o.timeToTransition1",
      ...args,
    ) as Promise<number>;
  }

  /** Time to Transition 2 (TIME) */
  bOTimeToTransition2(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "b.o.timeToTransition2",
      ...args,
    ) as Promise<number>;
  }

  /** Semimajor Axis (DISTANCE) */
  bOSma(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.sma", ...args) as Promise<number>;
  }

  /** Longitude of Ascending Node (DEG) */
  bOLan(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.lan", ...args) as Promise<number>;
  }

  /** Mean Anomaly at Epoch */
  bOMaae(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.maae", ...args) as Promise<number>;
  }

  /** Time of Periapsis Passage (DATE) */
  bOTimeOfPeriapsisPassage(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "b.o.timeOfPeriapsisPassage",
      ...args,
    ) as Promise<number>;
  }

  /** True Anomaly (DEG) */
  bOTrueAnomaly(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.trueAnomaly", ...args) as Promise<number>;
  }

  /** Phase Angle (DEG) */
  bOPhaseAngle(...args: (string | number)[]): Promise<number> {
    return this.client.query("b.o.phaseAngle", ...args) as Promise<number>;
  }

  /** True Position at the given UT */
  bOTruePositionAtUT(...args: (string | number)[]): Promise<unknown> {
    return this.client.query(
      "b.o.truePositionAtUT",
      ...args,
    ) as Promise<unknown>;
  }
}

/** career telemetry */
export class CareerApi {
  constructor(private readonly client: TeleClient) {}

  /** Available Funds */
  careerFunds(): Promise<number> {
    return this.client.query("career.funds") as Promise<number>;
  }

  /** Current Reputation */
  careerReputation(): Promise<number> {
    return this.client.query("career.reputation") as Promise<number>;
  }

  /** Available Science Points */
  careerScience(): Promise<number> {
    return this.client.query("career.science") as Promise<number>;
  }

  /** Game Mode (CAREER/SCIENCE/SANDBOX) (STRING) */
  careerMode(): Promise<string> {
    return this.client.query("career.mode") as Promise<string>;
  }
}

/** comms telemetry */
export class CommsApi {
  constructor(private readonly client: TeleClient) {}

  /** CommNet Is Connected */
  commConnected(): Promise<boolean> {
    return this.client.query("comm.connected") as Promise<boolean>;
  }

  /** CommNet Signal Strength (0-1) */
  commSignalStrength(): Promise<number> {
    return this.client.query("comm.signalStrength") as Promise<number>;
  }

  /** CommNet Control State (0=none, 1=partial, 2=full) */
  commControlState(): Promise<number> {
    return this.client.query("comm.controlState") as Promise<number>;
  }

  /** CommNet Control State Name (STRING) */
  commControlStateName(): Promise<string> {
    return this.client.query("comm.controlStateName") as Promise<string>;
  }

  /** CommNet Signal Delay (seconds) (TIME) */
  commSignalDelay(): Promise<number> {
    return this.client.query("comm.signalDelay") as Promise<number>;
  }
}

/** deltav telemetry */
export class DeltavApi {
  constructor(private readonly client: TeleClient) {}

  /** Delta-V Calculator Is Ready */
  dvReady(): Promise<number> {
    return this.client.query("dv.ready") as Promise<number>;
  }

  /** Total Delta-V (Vacuum) (VELOCITY) */
  dvTotalDVVac(): Promise<number> {
    return this.client.query("dv.totalDVVac") as Promise<number>;
  }

  /** Total Delta-V (Sea Level) (VELOCITY) */
  dvTotalDVASL(): Promise<number> {
    return this.client.query("dv.totalDVASL") as Promise<number>;
  }

  /** Total Delta-V (Current Atmosphere) (VELOCITY) */
  dvTotalDVActual(): Promise<number> {
    return this.client.query("dv.totalDVActual") as Promise<number>;
  }

  /** Total Burn Time (TIME) */
  dvTotalBurnTime(): Promise<number> {
    return this.client.query("dv.totalBurnTime") as Promise<number>;
  }

  /** Number of Stages with Delta-V Info */
  dvStageCount(): Promise<number> {
    return this.client.query("dv.stageCount") as Promise<number>;
  }

  /** Full Stage Info */
  dvStage(...args: (string | number)[]): Promise<Record<string, unknown>> {
    return this.client.query("dv.stage", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** All Stages Info */
  dvStages(): Promise<Record<string, unknown>> {
    return this.client.query("dv.stages") as Promise<Record<string, unknown>>;
  }

  /** Stage Delta-V Vacuum (VELOCITY) */
  dvStageDVVac(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageDVVac", ...args) as Promise<number>;
  }

  /** Stage Delta-V ASL (VELOCITY) */
  dvStageDVASL(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageDVASL", ...args) as Promise<number>;
  }

  /** Stage Delta-V Actual (VELOCITY) */
  dvStageDVActual(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageDVActual", ...args) as Promise<number>;
  }

  /** Stage TWR Vacuum */
  dvStageTWRVac(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageTWRVac", ...args) as Promise<number>;
  }

  /** Stage TWR ASL */
  dvStageTWRASL(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageTWRASL", ...args) as Promise<number>;
  }

  /** Stage TWR Actual */
  dvStageTWRActual(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageTWRActual", ...args) as Promise<number>;
  }

  /** Stage ISP Vacuum */
  dvStageISPVac(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageISPVac", ...args) as Promise<number>;
  }

  /** Stage ISP ASL */
  dvStageISPASL(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageISPASL", ...args) as Promise<number>;
  }

  /** Stage ISP Actual */
  dvStageISPActual(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageISPActual", ...args) as Promise<number>;
  }

  /** Stage Thrust Vacuum */
  dvStageThrustVac(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageThrustVac", ...args) as Promise<number>;
  }

  /** Stage Thrust ASL */
  dvStageThrustASL(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageThrustASL", ...args) as Promise<number>;
  }

  /** Stage Thrust Actual */
  dvStageThrustActual(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "dv.stageThrustActual",
      ...args,
    ) as Promise<number>;
  }

  /** Stage Burn Time (TIME) */
  dvStageBurnTime(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageBurnTime", ...args) as Promise<number>;
  }

  /** Stage Total Mass */
  dvStageMass(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageMass", ...args) as Promise<number>;
  }

  /** Stage Dry Mass */
  dvStageDryMass(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageDryMass", ...args) as Promise<number>;
  }

  /** Stage Fuel Mass */
  dvStageFuelMass(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageFuelMass", ...args) as Promise<number>;
  }

  /** Stage Start Mass */
  dvStageStartMass(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageStartMass", ...args) as Promise<number>;
  }

  /** Stage End Mass */
  dvStageEndMass(...args: (string | number)[]): Promise<number> {
    return this.client.query("dv.stageEndMass", ...args) as Promise<number>;
  }
}

/** docking telemetry */
export class DockingApi {
  constructor(private readonly client: TeleClient) {}

  /** Docking x Angle (DEG) */
  dockAx(): Promise<number> {
    return this.client.query("dock.ax") as Promise<number>;
  }

  /** Relative Pitch Angle (DEG) */
  dockAy(): Promise<number> {
    return this.client.query("dock.ay") as Promise<number>;
  }

  /** Docking z Angle (DEG) */
  dockAz(): Promise<number> {
    return this.client.query("dock.az") as Promise<number>;
  }

  /** Target x Distance (DISTANCE) */
  dockX(): Promise<number> {
    return this.client.query("dock.x") as Promise<number>;
  }

  /** Target y Distance (DISTANCE) */
  dockY(): Promise<number> {
    return this.client.query("dock.y") as Promise<number>;
  }
}

/** far telemetry */
export class FarApi {
  constructor(private readonly client: TeleClient) {}

  /** FAR Is Installed — requires far */
  farAvailable(): Promise<boolean> {
    return this.client.query("far.available") as Promise<boolean>;
  }

  /** Lift Coefficient (Cl) — requires far */
  farLiftCoeff(): Promise<number> {
    return this.client.query("far.liftCoeff") as Promise<number>;
  }

  /** Drag Coefficient (Cd) — requires far */
  farDragCoeff(): Promise<number> {
    return this.client.query("far.dragCoeff") as Promise<number>;
  }

  /** Reference Area (m²) — requires far */
  farRefArea(): Promise<number> {
    return this.client.query("far.refArea") as Promise<number>;
  }

  /** Ballistic Coefficient — requires far */
  farBallisticCoeff(): Promise<number> {
    return this.client.query("far.ballisticCoeff") as Promise<number>;
  }

  /** Dynamic Pressure (FAR) (DYNAMICPRESSURE) — requires far */
  farDynPres(): Promise<number> {
    return this.client.query("far.dynPres") as Promise<number>;
  }

  /** Terminal Velocity (VELOCITY) — requires far */
  farTermVel(): Promise<number> {
    return this.client.query("far.termVel") as Promise<number>;
  }

  /** Thrust Specific Fuel Consumption — requires far */
  farTsfc(): Promise<number> {
    return this.client.query("far.tsfc") as Promise<number>;
  }

  /** Angle of Attack (DEG) — requires far */
  farAoa(): Promise<number> {
    return this.client.query("far.aoa") as Promise<number>;
  }

  /** Sideslip Angle (DEG) — requires far */
  farSideslip(): Promise<number> {
    return this.client.query("far.sideslip") as Promise<number>;
  }

  /** Stall Fraction (0-1) — requires far */
  farStallFrac(): Promise<number> {
    return this.client.query("far.stallFrac") as Promise<number>;
  }

  /** Flap Deflection Level (0-3, -1 if no flaps) — requires far */
  farFlapSetting(): Promise<number> {
    return this.client.query("far.flapSetting") as Promise<number>;
  }

  /** Spoilers Active — requires far */
  farSpoiler(): Promise<boolean> {
    return this.client.query("far.spoiler") as Promise<boolean>;
  }

  /** Increase Flap Deflection — requires far */
  farIncreaseFlaps(): Promise<void> {
    return this.client.action("far.increaseFlaps");
  }

  /** Decrease Flap Deflection — requires far */
  farDecreaseFlaps(): Promise<void> {
    return this.client.action("far.decreaseFlaps");
  }

  /** Set Spoilers — requires far */
  farSetSpoilers(...args: (string | number)[]): Promise<void> {
    return this.client.action("far.setSpoilers", ...args);
  }

  /** Vessel Has Valid Voxelization — requires far */
  farVoxelized(): Promise<boolean> {
    return this.client.query("far.voxelized") as Promise<boolean>;
  }
}

/** fbw telemetry */
export class FbwApi {
  constructor(private readonly client: TeleClient) {}

  /** Yaw */
  vSetYaw(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setYaw", ...args);
  }

  /** Pitch */
  vSetPitch(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setPitch", ...args);
  }

  /** Roll */
  vSetRoll(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setRoll", ...args);
  }

  /** Set Fly by Wire On or Off */
  vSetFbW(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setFbW", ...args);
  }

  /** Set pitch, yaw, roll, X, Y and Z */
  vSetPitchYawRollXYZ(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setPitchYawRollXYZ", ...args);
  }

  /** Set pitch, yaw, roll */
  vSetAttitude(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setAttitude", ...args);
  }

  /** Set X, Y and Z */
  vSetTranslation(...args: (string | number)[]): Promise<void> {
    return this.client.action("v.setTranslation", ...args);
  }
}

/** flight telemetry */
export class FlightApi {
  constructor(private readonly client: TeleClient) {}

  /** Throttle */
  fThrottle(): Promise<number> {
    return this.client.query("f.throttle") as Promise<number>;
  }

  /** Pitch Control Input */
  fPitchInput(): Promise<number> {
    return this.client.query("f.pitchInput") as Promise<number>;
  }

  /** Yaw Control Input */
  fYawInput(): Promise<number> {
    return this.client.query("f.yawInput") as Promise<number>;
  }

  /** Roll Control Input */
  fRollInput(): Promise<number> {
    return this.client.query("f.rollInput") as Promise<number>;
  }

  /** RCS X Translation Input */
  fXInput(): Promise<number> {
    return this.client.query("f.xInput") as Promise<number>;
  }

  /** RCS Y Translation Input */
  fYInput(): Promise<number> {
    return this.client.query("f.yInput") as Promise<number>;
  }

  /** RCS Z Translation Input */
  fZInput(): Promise<number> {
    return this.client.query("f.zInput") as Promise<number>;
  }

  /** Pitch Trim */
  fPitchTrim(): Promise<number> {
    return this.client.query("f.pitchTrim") as Promise<number>;
  }

  /** Yaw Trim */
  fYawTrim(): Promise<number> {
    return this.client.query("f.yawTrim") as Promise<number>;
  }

  /** Roll Trim */
  fRollTrim(): Promise<number> {
    return this.client.query("f.rollTrim") as Promise<number>;
  }

  /** Controls Are Neutral */
  fIsNeutral(): Promise<boolean> {
    return this.client.query("f.isNeutral") as Promise<boolean>;
  }

  /** SAS Kill Rotation Active */
  fKillRot(): Promise<boolean> {
    return this.client.query("f.killRot") as Promise<boolean>;
  }

  /** Query RCS value */
  vRcsValue(): Promise<boolean> {
    return this.client.query("v.rcsValue") as Promise<boolean>;
  }

  /** Query SAS value */
  vSasValue(): Promise<boolean> {
    return this.client.query("v.sasValue") as Promise<boolean>;
  }

  /** Query light value */
  vLightValue(): Promise<boolean> {
    return this.client.query("v.lightValue") as Promise<boolean>;
  }

  /** Query brake value */
  vBrakeValue(): Promise<boolean> {
    return this.client.query("v.brakeValue") as Promise<boolean>;
  }

  /** Query gear value */
  vGearValue(): Promise<boolean> {
    return this.client.query("v.gearValue") as Promise<boolean>;
  }

  /** Query abort value */
  vAbortValue(): Promise<boolean> {
    return this.client.query("v.abortValue") as Promise<boolean>;
  }

  /** Query Action Group 1 value */
  vAg1Value(): Promise<boolean> {
    return this.client.query("v.ag1Value") as Promise<boolean>;
  }

  /** Query Action Group 2 value */
  vAg2Value(): Promise<boolean> {
    return this.client.query("v.ag2Value") as Promise<boolean>;
  }

  /** Query Action Group 3 value */
  vAg3Value(): Promise<boolean> {
    return this.client.query("v.ag3Value") as Promise<boolean>;
  }

  /** Query Action Group 4 value */
  vAg4Value(): Promise<boolean> {
    return this.client.query("v.ag4Value") as Promise<boolean>;
  }

  /** Query Action Group 5 value */
  vAg5Value(): Promise<boolean> {
    return this.client.query("v.ag5Value") as Promise<boolean>;
  }

  /** Query Action Group 6 value */
  vAg6Value(): Promise<boolean> {
    return this.client.query("v.ag6Value") as Promise<boolean>;
  }

  /** Query Action Group 7 value */
  vAg7Value(): Promise<boolean> {
    return this.client.query("v.ag7Value") as Promise<boolean>;
  }

  /** Query Action Group 8 value */
  vAg8Value(): Promise<boolean> {
    return this.client.query("v.ag8Value") as Promise<boolean>;
  }

  /** Query Action Group 9 value */
  vAg9Value(): Promise<boolean> {
    return this.client.query("v.ag9Value") as Promise<boolean>;
  }

  /** Query Action Group 10 value */
  vAg10Value(): Promise<boolean> {
    return this.client.query("v.ag10Value") as Promise<boolean>;
  }

  /** Query precision controls value */
  vPrecisionControlValue(): Promise<boolean> {
    return this.client.query("v.precisionControlValue") as Promise<boolean>;
  }

  /** Current SAS Mode (STRING) */
  fSasMode(): Promise<string> {
    return this.client.query("f.sasMode") as Promise<string>;
  }

  /** SAS Autopilot Enabled */
  fSasEnabled(): Promise<boolean> {
    return this.client.query("f.sasEnabled") as Promise<boolean>;
  }

  /** Set SAS Mode */
  fSetSASMode(...args: (string | number)[]): Promise<void> {
    return this.client.action("f.setSASMode", ...args);
  }

  /** Set Pitch Trim */
  fSetPitchTrim(...args: (string | number)[]): Promise<void> {
    return this.client.action("f.setPitchTrim", ...args);
  }

  /** Set Yaw Trim */
  fSetYawTrim(...args: (string | number)[]): Promise<void> {
    return this.client.action("f.setYawTrim", ...args);
  }

  /** Set Roll Trim */
  fSetRollTrim(...args: (string | number)[]): Promise<void> {
    return this.client.action("f.setRollTrim", ...args);
  }
}

/** kerbalism telemetry */
export class KerbalismApi {
  constructor(private readonly client: TeleClient) {}

  /** Kerbalism Is Installed — requires kerbalism */
  kerbalismAvailable(): Promise<boolean> {
    return this.client.query("kerbalism.available") as Promise<boolean>;
  }

  /** Kerbalism Enabled Features — requires kerbalism */
  kerbalismFeatures(): Promise<Record<string, unknown>> {
    return this.client.query("kerbalism.features") as Promise<
      Record<string, unknown>
    >;
  }

  /** Radiation System Enabled — requires kerbalism */
  kerbalismRadiationEnabled(): Promise<boolean> {
    return this.client.query("kerbalism.radiationEnabled") as Promise<boolean>;
  }

  /** Environment Radiation (rad/h) — requires kerbalism */
  kerbalismRadiation(): Promise<number> {
    return this.client.query("kerbalism.radiation") as Promise<number>;
  }

  /** Habitat Radiation (rad/h) — requires kerbalism */
  kerbalismHabitatRadiation(): Promise<number> {
    return this.client.query("kerbalism.habitatRadiation") as Promise<number>;
  }

  /** Inside Magnetosphere — requires kerbalism */
  kerbalismMagnetosphere(): Promise<boolean> {
    return this.client.query("kerbalism.magnetosphere") as Promise<boolean>;
  }

  /** Inside Inner Radiation Belt — requires kerbalism */
  kerbalismInnerBelt(): Promise<boolean> {
    return this.client.query("kerbalism.innerBelt") as Promise<boolean>;
  }

  /** Inside Outer Radiation Belt — requires kerbalism */
  kerbalismOuterBelt(): Promise<boolean> {
    return this.client.query("kerbalism.outerBelt") as Promise<boolean>;
  }

  /** Stellar Activity (0-1) — requires kerbalism */
  kerbalismStellarActivity(): Promise<number> {
    return this.client.query("kerbalism.stellarActivity") as Promise<number>;
  }

  /** Habitat Volume (m³) — requires kerbalism */
  kerbalismHabitatVolume(): Promise<number> {
    return this.client.query("kerbalism.habitatVolume") as Promise<number>;
  }

  /** Habitat Surface Area (m²) — requires kerbalism */
  kerbalismHabitatSurface(): Promise<number> {
    return this.client.query("kerbalism.habitatSurface") as Promise<number>;
  }

  /** Habitat Pressure (0-1) — requires kerbalism */
  kerbalismHabitatPressure(): Promise<number> {
    return this.client.query("kerbalism.habitatPressure") as Promise<number>;
  }

  /** CO2 Poisoning Level — requires kerbalism */
  kerbalismCo2Level(): Promise<number> {
    return this.client.query("kerbalism.co2Level") as Promise<number>;
  }

  /** Radiation Shielding (0-1) — requires kerbalism */
  kerbalismRadiationShielding(): Promise<number> {
    return this.client.query("kerbalism.radiationShielding") as Promise<number>;
  }

  /** Living Space Comfort Factor — requires kerbalism */
  kerbalismHabitatLivingSpace(): Promise<number> {
    return this.client.query("kerbalism.habitatLivingSpace") as Promise<number>;
  }

  /** Overall Habitat Comfort Factor — requires kerbalism */
  kerbalismHabitatComfort(): Promise<number> {
    return this.client.query("kerbalism.habitatComfort") as Promise<number>;
  }

  /** Signal Connected — requires kerbalism */
  kerbalismConnectionLinked(): Promise<boolean> {
    return this.client.query("kerbalism.connectionLinked") as Promise<boolean>;
  }

  /** Data Rate (MB/s) — requires kerbalism */
  kerbalismConnectionRate(): Promise<number> {
    return this.client.query("kerbalism.connectionRate") as Promise<number>;
  }

  /** Files Transmitting — requires kerbalism */
  kerbalismConnectionTransmitting(): Promise<number> {
    return this.client.query(
      "kerbalism.connectionTransmitting",
    ) as Promise<number>;
  }

  /** Full Connection Info — requires kerbalism */
  kerbalismConnection(): Promise<Record<string, unknown>> {
    return this.client.query("kerbalism.connection") as Promise<
      Record<string, unknown>
    >;
  }

  /** Experiment Is Running [string experiment_id] — requires kerbalism */
  kerbalismExperimentRunning(): Promise<boolean> {
    return this.client.query("kerbalism.experimentRunning") as Promise<boolean>;
  }

  /** Stellar Storm Incoming — requires kerbalism */
  kerbalismStellarStormIncoming(): Promise<boolean> {
    return this.client.query(
      "kerbalism.stellarStormIncoming",
    ) as Promise<boolean>;
  }

  /** Stellar Storm In Progress — requires kerbalism */
  kerbalismStellarStormInProgress(): Promise<boolean> {
    return this.client.query(
      "kerbalism.stellarStormInProgress",
    ) as Promise<boolean>;
  }

  /** Stellar Storm State (0=none, 1=incoming, 2=active) — requires kerbalism */
  kerbalismStellarStormState(): Promise<number> {
    return this.client.query("kerbalism.stellarStormState") as Promise<number>;
  }

  /** Stellar Storm Duration (s) — requires kerbalism */
  kerbalismStellarStormDuration(): Promise<number> {
    return this.client.query(
      "kerbalism.stellarStormDuration",
    ) as Promise<number>;
  }

  /** Stellar Storm Start Time (UT) — requires kerbalism */
  kerbalismStellarStormStartTime(): Promise<number> {
    return this.client.query(
      "kerbalism.stellarStormStartTime",
    ) as Promise<number>;
  }

  /** Environment Temperature (K) — requires kerbalism */
  kerbalismEnvTemperature(): Promise<number> {
    return this.client.query("kerbalism.envTemperature") as Promise<number>;
  }

  /** Temp Difference from Survival — requires kerbalism */
  kerbalismEnvTempDiff(): Promise<number> {
    return this.client.query("kerbalism.envTempDiff") as Promise<number>;
  }

  /** Storm Radiation Dose — requires kerbalism */
  kerbalismEnvStormRadiation(): Promise<number> {
    return this.client.query("kerbalism.envStormRadiation") as Promise<number>;
  }

  /** Atmosphere Breathable — requires kerbalism */
  kerbalismBreathable(): Promise<boolean> {
    return this.client.query("kerbalism.breathable") as Promise<boolean>;
  }

  /** Inside Atmosphere — requires kerbalism */
  kerbalismInAtmosphere(): Promise<boolean> {
    return this.client.query("kerbalism.inAtmosphere") as Promise<boolean>;
  }

  /** Part Malfunction Active — requires kerbalism */
  kerbalismMalfunction(): Promise<boolean> {
    return this.client.query("kerbalism.malfunction") as Promise<boolean>;
  }

  /** Critical Failure Active — requires kerbalism */
  kerbalismCritical(): Promise<boolean> {
    return this.client.query("kerbalism.critical") as Promise<boolean>;
  }

  /** Solar Panel Average Exposure (0-1) — requires kerbalism */
  kerbalismSolarExposure(): Promise<number> {
    return this.client.query("kerbalism.solarExposure") as Promise<number>;
  }

  /** Drive Free Space (MB) — requires kerbalism */
  kerbalismDrivesFreeSpace(): Promise<number> {
    return this.client.query("kerbalism.drivesFreeSpace") as Promise<number>;
  }

  /** Drive Total Capacity (MB) — requires kerbalism */
  kerbalismDrivesCapacity(): Promise<number> {
    return this.client.query("kerbalism.drivesCapacity") as Promise<number>;
  }

  /** Crew Health Summary — requires kerbalism */
  kerbalismCrew(): Promise<Record<string, unknown>> {
    return this.client.query("kerbalism.crew") as Promise<
      Record<string, unknown>
    >;
  }
}

/** landing telemetry */
export class LandingApi {
  constructor(private readonly client: TeleClient) {}

  /** Estimated Seconds to Impact (TIME) */
  landTimeToImpact(): Promise<number> {
    return this.client.query("land.timeToImpact") as Promise<number>;
  }

  /** Predicted Speed at Impact (current thrust) (VELOCITY) */
  landSpeedAtImpact(): Promise<number> {
    return this.client.query("land.speedAtImpact") as Promise<number>;
  }

  /** Predicted Speed at Impact (max thrust) (VELOCITY) */
  landBestSpeedAtImpact(): Promise<number> {
    return this.client.query("land.bestSpeedAtImpact") as Promise<number>;
  }

  /** Seconds Until Suicide Burn Start (TIME) */
  landSuicideBurnCountdown(): Promise<number> {
    return this.client.query("land.suicideBurnCountdown") as Promise<number>;
  }

  /** Predicted Landing Latitude (LATLON) */
  landPredictedLat(): Promise<number> {
    return this.client.query("land.predictedLat") as Promise<number>;
  }

  /** Predicted Landing Longitude (LATLON) */
  landPredictedLon(): Promise<number> {
    return this.client.query("land.predictedLon") as Promise<number>;
  }

  /** Predicted Landing Terrain Altitude (DISTANCE) */
  landPredictedAlt(): Promise<number> {
    return this.client.query("land.predictedAlt") as Promise<number>;
  }

  /** Terrain Slope Angle Under Vessel (DEG) */
  landSlopeAngle(): Promise<number> {
    return this.client.query("land.slopeAngle") as Promise<number>;
  }
}

/** maneuver telemetry */
export class ManeuverApi {
  constructor(private readonly client: TeleClient) {}

  /** Maneuver Nodes */
  oManeuverNodes(): Promise<Record<string, unknown>> {
    return this.client.query("o.maneuverNodes") as Promise<
      Record<string, unknown>
    >;
  }

  /** Number of Maneuver Nodes */
  oManeuverNodesCount(): Promise<number> {
    return this.client.query("o.maneuverNodes.count") as Promise<number>;
  }

  /** Maneuver Node Delta-V Vector */
  oManeuverNodesDeltaV(...args: (string | number)[]): Promise<unknown> {
    return this.client.query(
      "o.maneuverNodes.deltaV",
      ...args,
    ) as Promise<unknown>;
  }

  /** Maneuver Node Delta-V Magnitude (VELOCITY) */
  oManeuverNodesDeltaVMagnitude(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "o.maneuverNodes.deltaVMagnitude",
      ...args,
    ) as Promise<number>;
  }

  /** Maneuver Node Universal Time (DATE) */
  oManeuverNodesUT(...args: (string | number)[]): Promise<number> {
    return this.client.query("o.maneuverNodes.UT", ...args) as Promise<number>;
  }

  /** Time Until Maneuver Node (TIME) */
  oManeuverNodesTimeTo(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "o.maneuverNodes.timeTo",
      ...args,
    ) as Promise<number>;
  }

  /** Maneuver Node Burn Vector (world space) */
  oManeuverNodesBurnVector(...args: (string | number)[]): Promise<unknown> {
    return this.client.query(
      "o.maneuverNodes.burnVector",
      ...args,
    ) as Promise<unknown>;
  }

  /** Orbit Patches for Maneuver Node */
  oManeuverNodesOrbitPatches(
    ...args: (string | number)[]
  ): Promise<Record<string, unknown>> {
    return this.client.query(
      "o.maneuverNodes.orbitPatches",
      ...args,
    ) as Promise<Record<string, unknown>>;
  }

  /** For a maneuver node, The orbit patch's True Anomaly at Universal Time (DEG) */
  oManeuverNodesTrueAnomalyAtUTForManeuverNodesOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "o.maneuverNodes.trueAnomalyAtUTForManeuverNodesOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** For a maneuver node, The orbit patch's Universal Time at True Anomaly (DATE) */
  oManeuverNodesUTForTrueAnomalyForManeuverNodesOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "o.maneuverNodes.UTForTrueAnomalyForManeuverNodesOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** For a maneuver node, The orbit patch's predicted displacement from the center of the main body at the given true anomaly */
  oManeuverNodesRelativePositionAtTrueAnomalyForManeuverNodesOrbitPatch(
    ...args: (string | number)[]
  ): Promise<unknown> {
    return this.client.query(
      "o.maneuverNodes.relativePositionAtTrueAnomalyForManeuverNodesOrbitPatch",
      ...args,
    ) as Promise<unknown>;
  }

  /** For a maneuver node, The orbit patch's predicted displacement from the center of the main body at the given universal time */
  oManeuverNodesRelativePositionAtUTForManeuverNodesOrbitPatch(
    ...args: (string | number)[]
  ): Promise<unknown> {
    return this.client.query(
      "o.maneuverNodes.relativePositionAtUTForManeuverNodesOrbitPatch",
      ...args,
    ) as Promise<unknown>;
  }

  /** Add a manuever based on a UT and DeltaV X, Y and Z */
  oAddManeuverNode(...args: (string | number)[]): Promise<void> {
    return this.client.action("o.addManeuverNode", ...args);
  }

  /** Set a manuever node's UT and DeltaV X, Y and Z */
  oUpdateManeuverNode(...args: (string | number)[]): Promise<void> {
    return this.client.action("o.updateManeuverNode", ...args);
  }

  /** Remove a manuever node */
  oRemoveManeuverNode(...args: (string | number)[]): Promise<void> {
    return this.client.action("o.removeManeuverNode", ...args);
  }
}

/** map telemetry */
export class MapApi {
  constructor(private readonly client: TeleClient) {}

  /** Map View Is Enabled */
  mMapIsEnabled(): Promise<boolean> {
    return this.client.query("m.mapIsEnabled") as Promise<boolean>;
  }
}

/** mechjeb telemetry */
export class MechjebApi {
  constructor(private readonly client: TeleClient) {}

  /** MechJeb Is Installed — requires mechjeb */
  mjAvailable(): Promise<boolean> {
    return this.client.query("mj.available") as Promise<boolean>;
  }
}

/** navigation telemetry */
export class NavigationApi {
  constructor(private readonly client: TeleClient) {}

  /** Heading (DEG) */
  nHeading2(): Promise<number> {
    return this.client.query("n.heading2") as Promise<number>;
  }

  /** Pitch (DEG) */
  nPitch2(): Promise<number> {
    return this.client.query("n.pitch2") as Promise<number>;
  }

  /** Roll (DEG) */
  nRoll2(): Promise<number> {
    return this.client.query("n.roll2") as Promise<number>;
  }

  /** Raw Heading (DEG) */
  nRawheading2(): Promise<number> {
    return this.client.query("n.rawheading2") as Promise<number>;
  }

  /** Raw Pitch (DEG) */
  nRawpitch2(): Promise<number> {
    return this.client.query("n.rawpitch2") as Promise<number>;
  }

  /** Raw Roll (DEG) */
  nRawroll2(): Promise<number> {
    return this.client.query("n.rawroll2") as Promise<number>;
  }

  /** Heading calculated using the position of the vessels root part (DEG) */
  nHeading(): Promise<number> {
    return this.client.query("n.heading") as Promise<number>;
  }

  /** Pitch calculated using the position of the vessels root part (DEG) */
  nPitch(): Promise<number> {
    return this.client.query("n.pitch") as Promise<number>;
  }

  /** Roll calculated using the position of the vessels root part (DEG) */
  nRoll(): Promise<number> {
    return this.client.query("n.roll") as Promise<number>;
  }

  /** Raw Heading calculated using the position of the vessels root part (DEG) */
  nRawheading(): Promise<number> {
    return this.client.query("n.rawheading") as Promise<number>;
  }

  /** Raw Pitch calculated using the position of the vessels root part (DEG) */
  nRawpitch(): Promise<number> {
    return this.client.query("n.rawpitch") as Promise<number>;
  }

  /** Raw Roll calculated using the position of the vessels root part (DEG) */
  nRawroll(): Promise<number> {
    return this.client.query("n.rawroll") as Promise<number>;
  }
}

/** orbit telemetry */
export class OrbitApi {
  constructor(private readonly client: TeleClient) {}

  /** Mean Semimajor Axis (Principia) (DISTANCE) — requires principia */
  oMeanSma(): Promise<number> {
    return this.client.query("o.mean.sma") as Promise<number>;
  }

  /** Mean Eccentricity (Principia) — requires principia */
  oMeanEccentricity(): Promise<number> {
    return this.client.query("o.mean.eccentricity") as Promise<number>;
  }

  /** Mean Inclination (Principia) (DEG) — requires principia */
  oMeanInclination(): Promise<number> {
    return this.client.query("o.mean.inclination") as Promise<number>;
  }

  /** Mean Longitude of Ascending Node (Principia) (DEG) — requires principia */
  oMeanLan(): Promise<number> {
    return this.client.query("o.mean.lan") as Promise<number>;
  }

  /** Mean Argument of Periapsis (Principia) (DEG) — requires principia */
  oMeanArgumentOfPeriapsis(): Promise<number> {
    return this.client.query("o.mean.argumentOfPeriapsis") as Promise<number>;
  }

  /** Mean Periapsis Altitude (Principia) (DISTANCE) — requires principia */
  oMeanPeA(): Promise<number> {
    return this.client.query("o.mean.PeA") as Promise<number>;
  }

  /** Mean Apoapsis Altitude (Principia) (DISTANCE) — requires principia */
  oMeanApA(): Promise<number> {
    return this.client.query("o.mean.ApA") as Promise<number>;
  }

  /** Mean SMA Range {min,max} (Principia) — requires principia */
  oMeanSmaRange(): Promise<Record<string, unknown>> {
    return this.client.query("o.mean.smaRange") as Promise<
      Record<string, unknown>
    >;
  }

  /** Mean Eccentricity Range (Principia) — requires principia */
  oMeanEccentricityRange(): Promise<Record<string, unknown>> {
    return this.client.query("o.mean.eccentricityRange") as Promise<
      Record<string, unknown>
    >;
  }

  /** Mean Inclination Range (Principia) — requires principia */
  oMeanInclinationRange(): Promise<Record<string, unknown>> {
    return this.client.query("o.mean.inclinationRange") as Promise<
      Record<string, unknown>
    >;
  }

  /** Mean Periapsis Altitude Range (Principia) — requires principia */
  oMeanPeARange(): Promise<Record<string, unknown>> {
    return this.client.query("o.mean.PeARange") as Promise<
      Record<string, unknown>
    >;
  }

  /** Mean Apoapsis Altitude Range (Principia) — requires principia */
  oMeanApARange(): Promise<Record<string, unknown>> {
    return this.client.query("o.mean.ApARange") as Promise<
      Record<string, unknown>
    >;
  }

  /** Sidereal Period (Principia) (TIME) — requires principia */
  oMeanSiderealPeriod(): Promise<number> {
    return this.client.query("o.mean.siderealPeriod") as Promise<number>;
  }

  /** Nodal Period (Principia) (TIME) — requires principia */
  oMeanNodalPeriod(): Promise<number> {
    return this.client.query("o.mean.nodalPeriod") as Promise<number>;
  }

  /** Anomalistic Period (Principia) (TIME) — requires principia */
  oMeanAnomalisticPeriod(): Promise<number> {
    return this.client.query("o.mean.anomalisticPeriod") as Promise<number>;
  }

  /** Nodal Precession Rate (rad/s, Principia) — requires principia */
  oMeanNodalPrecession(): Promise<number> {
    return this.client.query("o.mean.nodalPrecession") as Promise<number>;
  }

  /** Orbit Recurrence Info (Principia) — requires principia */
  oMeanRecurrence(): Promise<Record<string, unknown>> {
    return this.client.query("o.mean.recurrence") as Promise<
      Record<string, unknown>
    >;
  }

  /** Periapsis Altitude (DISTANCE) */
  oPeA(): Promise<number> {
    return this.client.query("o.PeA") as Promise<number>;
  }

  /** Apoapsis Altitude (DISTANCE) */
  oApA(): Promise<number> {
    return this.client.query("o.ApA") as Promise<number>;
  }

  /** Periapsis Radius (DISTANCE) */
  oPeR(): Promise<number> {
    return this.client.query("o.PeR") as Promise<number>;
  }

  /** Apoapsis Radius (DISTANCE) */
  oApR(): Promise<number> {
    return this.client.query("o.ApR") as Promise<number>;
  }

  /** Time to Apoapsis (TIME) */
  oTimeToAp(): Promise<number> {
    return this.client.query("o.timeToAp") as Promise<number>;
  }

  /** Time to Periapsis (TIME) */
  oTimeToPe(): Promise<number> {
    return this.client.query("o.timeToPe") as Promise<number>;
  }

  /** Inclination (DEG) */
  oInclination(): Promise<number> {
    return this.client.query("o.inclination") as Promise<number>;
  }

  /** Eccentricity */
  oEccentricity(): Promise<number> {
    return this.client.query("o.eccentricity") as Promise<number>;
  }

  /** Semimajor Axis (DISTANCE) */
  oSma(): Promise<number> {
    return this.client.query("o.sma") as Promise<number>;
  }

  /** Semi-minor Axis (DISTANCE) */
  oSemiMinorAxis(): Promise<number> {
    return this.client.query("o.semiMinorAxis") as Promise<number>;
  }

  /** Semi-latus Rectum (DISTANCE) */
  oSemiLatusRectum(): Promise<number> {
    return this.client.query("o.semiLatusRectum") as Promise<number>;
  }

  /** Longitude of Ascending Node (DEG) */
  oLan(): Promise<number> {
    return this.client.query("o.lan") as Promise<number>;
  }

  /** Argument of Periapsis (DEG) */
  oArgumentOfPeriapsis(): Promise<number> {
    return this.client.query("o.argumentOfPeriapsis") as Promise<number>;
  }

  /** Epoch */
  oEpoch(): Promise<number> {
    return this.client.query("o.epoch") as Promise<number>;
  }

  /** Orbital Period (TIME) */
  oPeriod(): Promise<number> {
    return this.client.query("o.period") as Promise<number>;
  }

  /** True Anomaly (DEG) */
  oTrueAnomaly(): Promise<number> {
    return this.client.query("o.trueAnomaly") as Promise<number>;
  }

  /** Mean Anomaly (DEG) */
  oMeanAnomaly(): Promise<number> {
    return this.client.query("o.meanAnomaly") as Promise<number>;
  }

  /** Eccentric Anomaly (DEG) */
  oEccentricAnomaly(): Promise<number> {
    return this.client.query("o.eccentricAnomaly") as Promise<number>;
  }

  /** Mean Anomaly at Epoch */
  oMaae(): Promise<number> {
    return this.client.query("o.maae") as Promise<number>;
  }

  /** Time of Periapsis Passage (DATE) */
  oTimeOfPeriapsisPassage(): Promise<number> {
    return this.client.query("o.timeOfPeriapsisPassage") as Promise<number>;
  }

  /** Orbit Percent */
  oOrbitPercent(): Promise<number> {
    return this.client.query("o.orbitPercent") as Promise<number>;
  }

  /** Relative Velocity (VELOCITY) */
  oRelativeVelocity(): Promise<number> {
    return this.client.query("o.relativeVelocity") as Promise<number>;
  }

  /** Orbital Speed (VELOCITY) */
  oOrbitalSpeed(): Promise<number> {
    return this.client.query("o.orbitalSpeed") as Promise<number>;
  }

  /** Orbital Velocity Vector */
  oVel(): Promise<unknown> {
    return this.client.query("o.vel") as Promise<unknown>;
  }

  /** Orbital Radius (DISTANCE) */
  oRadius(): Promise<number> {
    return this.client.query("o.radius") as Promise<number>;
  }

  /** Orbital Position Vector */
  oPos(): Promise<unknown> {
    return this.client.query("o.pos") as Promise<unknown>;
  }

  /** Specific Orbital Energy */
  oOrbitalEnergy(): Promise<number> {
    return this.client.query("o.orbitalEnergy") as Promise<number>;
  }

  /** Orbit Normal Vector */
  oOrbitNormal(): Promise<unknown> {
    return this.client.query("o.orbitNormal") as Promise<unknown>;
  }

  /** Eccentricity Vector */
  oEccVec(): Promise<unknown> {
    return this.client.query("o.eccVec") as Promise<unknown>;
  }

  /** Ascending Node Vector */
  oAnVec(): Promise<unknown> {
    return this.client.query("o.anVec") as Promise<unknown>;
  }

  /** Specific Angular Momentum Vector */
  oH(): Promise<unknown> {
    return this.client.query("o.h") as Promise<unknown>;
  }

  /** Reference Body Name (STRING) */
  oReferenceBody(): Promise<string> {
    return this.client.query("o.referenceBody") as Promise<string>;
  }

  /** Next Apsis Type (-1=Pe, 1=Ap, 0=N/A) */
  oNextApsisType(): Promise<number> {
    return this.client.query("o.nextApsisType") as Promise<number>;
  }

  /** Time to Next Apsis (TIME) */
  oTimeToNextApsis(): Promise<number> {
    return this.client.query("o.timeToNextApsis") as Promise<number>;
  }

  /** Time to Transition 1 (TIME) */
  oTimeToTransition1(): Promise<number> {
    return this.client.query("o.timeToTransition1") as Promise<number>;
  }

  /** Time to Transition 2 (TIME) */
  oTimeToTransition2(): Promise<number> {
    return this.client.query("o.timeToTransition2") as Promise<number>;
  }

  /** Patch Start Transition Type (STRING) */
  oPatchStartTransition(): Promise<string> {
    return this.client.query("o.patchStartTransition") as Promise<string>;
  }

  /** Patch End Transition Type (STRING) */
  oPatchEndTransition(): Promise<string> {
    return this.client.query("o.patchEndTransition") as Promise<string>;
  }

  /** Orbit Patch Start UT (DATE) */
  oStartUT(): Promise<number> {
    return this.client.query("o.StartUT") as Promise<number>;
  }

  /** Orbit Patch End UT (DATE) */
  oEndUT(): Promise<number> {
    return this.client.query("o.EndUT") as Promise<number>;
  }

  /** UT of SOI Transition (DATE) */
  oUTsoi(): Promise<number> {
    return this.client.query("o.UTsoi") as Promise<number>;
  }

  /** Closest Encounter Body Name (STRING) */
  oClosestEncounterBody(): Promise<string> {
    return this.client.query("o.closestEncounterBody") as Promise<string>;
  }

  /** Closest Target Approach UT (DATE) */
  oClosestTgtApprUT(): Promise<number> {
    return this.client.query("o.closestTgtApprUT") as Promise<number>;
  }

  /** SOI Encounter Exists (-1=escape, 0=none, 1=encounter) */
  oEncounterExists(): Promise<number> {
    return this.client.query("o.encounterExists") as Promise<number>;
  }

  /** Encounter/Escape Body Name (STRING) */
  oEncounterBody(): Promise<string> {
    return this.client.query("o.encounterBody") as Promise<string>;
  }

  /** Time Until SOI Encounter/Escape (TIME) */
  oEncounterTime(): Promise<number> {
    return this.client.query("o.encounterTime") as Promise<number>;
  }

  /** Orbital Speed at Orbit Time (VELOCITY) */
  oOrbitalSpeedAt(...args: (string | number)[]): Promise<number> {
    return this.client.query("o.orbitalSpeedAt", ...args) as Promise<number>;
  }

  /** Orbital Speed at Distance (VELOCITY) */
  oOrbitalSpeedAtDistance(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "o.orbitalSpeedAtDistance",
      ...args,
    ) as Promise<number>;
  }

  /** Radius at True Anomaly (DISTANCE) */
  oRadiusAtTrueAnomaly(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "o.radiusAtTrueAnomaly",
      ...args,
    ) as Promise<number>;
  }

  /** True Anomaly at Radius (DEG) */
  oTrueAnomalyAtRadius(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "o.trueAnomalyAtRadius",
      ...args,
    ) as Promise<number>;
  }

  /** Detailed Orbit Patches Info */
  oOrbitPatches(): Promise<Record<string, unknown>> {
    return this.client.query("o.orbitPatches") as Promise<
      Record<string, unknown>
    >;
  }

  /** The orbit patch's True Anomaly at Universal Time (DEG) */
  oTrueAnomalyAtUTForOrbitPatch(...args: (string | number)[]): Promise<number> {
    return this.client.query(
      "o.trueAnomalyAtUTForOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** The orbit patch's Universal Time at True Anomaly (DATE) */
  oUTForTrueAnomalyForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "o.UTForTrueAnomalyForOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** The orbit patch's predicted displacement from the center of the main body at the given true anomaly */
  oRelativePositionAtTrueAnomalyForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<unknown> {
    return this.client.query(
      "o.relativePositionAtTrueAnomalyForOrbitPatch",
      ...args,
    ) as Promise<unknown>;
  }

  /** The orbit patch's predicted displacement from the center of the main body at the given universal time */
  oRelativePositionAtUTForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<unknown> {
    return this.client.query(
      "o.relativePositionAtUTForOrbitPatch",
      ...args,
    ) as Promise<unknown>;
  }

  /** Language (STRING) */
  oGameLanguage(): Promise<string> {
    return this.client.query("o.gameLanguage") as Promise<string>;
  }
}

/** principia telemetry */
export class PrincipiaApi {
  constructor(private readonly client: TeleClient) {}

  /** Principia Is Installed — requires principia */
  principiaAvailable(): Promise<boolean> {
    return this.client.query("principia.available") as Promise<boolean>;
  }

  /** Principia Assembly Version (STRING) — requires principia */
  principiaVersion(): Promise<string> {
    return this.client.query("principia.version") as Promise<string>;
  }

  /** Principia Plugin Running — requires principia */
  principiaActive(): Promise<boolean> {
    return this.client.query("principia.active") as Promise<boolean>;
  }

  /** Orbit Analysis Progress (0-1) — requires principia */
  principiaAnalysisProgress(): Promise<number> {
    return this.client.query("principia.analysisProgress") as Promise<number>;
  }

  /** Analysis Mission Duration (s) (TIME) — requires principia */
  principiaMissionDuration(): Promise<number> {
    return this.client.query("principia.missionDuration") as Promise<number>;
  }

  /** Number of Planned Burns — requires principia */
  principiaPlanCount(): Promise<number> {
    return this.client.query("principia.plan.count") as Promise<number>;
  }

  /** Navball Guidance Active — requires principia */
  principiaPlanGuidance(): Promise<boolean> {
    return this.client.query("principia.plan.guidance") as Promise<boolean>;
  }

  /** All Planned Burns — requires principia */
  principiaPlanBurns(): Promise<Record<string, unknown>> {
    return this.client.query("principia.plan.burns") as Promise<
      Record<string, unknown>
    >;
  }

  /** Planned Burn by Index — requires principia */
  principiaPlanBurn(
    ...args: (string | number)[]
  ): Promise<Record<string, unknown>> {
    return this.client.query("principia.plan.burn", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** Complete Orbit Analysis (Principia) — requires principia */
  principiaAnalysis(): Promise<Record<string, unknown>> {
    return this.client.query("principia.analysis") as Promise<
      Record<string, unknown>
    >;
  }
}

/** realchute telemetry */
export class RealchuteApi {
  constructor(private readonly client: TeleClient) {}

  /** RealChute Is Installed — requires realchute */
  rcAvailable(): Promise<boolean> {
    return this.client.query("rc.available") as Promise<boolean>;
  }

  /** Number of RealChute Parts — requires realchute */
  rcCount(): Promise<number> {
    return this.client.query("rc.count") as Promise<number>;
  }

  /** Any Chute Deployed — requires realchute */
  rcAnyDeployed(): Promise<boolean> {
    return this.client.query("rc.anyDeployed") as Promise<boolean>;
  }

  /** Deployment Safety (SAFE/RISKY/DANGEROUS) (STRING) — requires realchute */
  rcSafeState(): Promise<string> {
    return this.client.query("rc.safeState") as Promise<string>;
  }

  /** All Chute Status — requires realchute */
  rcChutes(): Promise<Record<string, unknown>> {
    return this.client.query("rc.chutes") as Promise<Record<string, unknown>>;
  }

  /** Deploy All Chutes — requires realchute */
  rcDeploy(): Promise<void> {
    return this.client.action("rc.deploy");
  }

  /** Cut All Chutes — requires realchute */
  rcCut(): Promise<void> {
    return this.client.action("rc.cut");
  }

  /** Arm All Chutes — requires realchute */
  rcArm(): Promise<void> {
    return this.client.action("rc.arm");
  }

  /** Disarm All Chutes — requires realchute */
  rcDisarm(): Promise<void> {
    return this.client.action("rc.disarm");
  }
}

/** resource telemetry */
export class ResourceApi {
  constructor(private readonly client: TeleClient) {}

  /** Resource Information */
  rResource(...args: (string | number)[]): Promise<Record<string, unknown>> {
    return this.client.query("r.resource", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** Resource Information for Current Stage */
  rResourceCurrent(
    ...args: (string | number)[]
  ): Promise<Record<string, unknown>> {
    return this.client.query("r.resourceCurrent", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** Max Resource Information for Current Stage */
  rResourceCurrentMax(
    ...args: (string | number)[]
  ): Promise<Record<string, unknown>> {
    return this.client.query("r.resourceCurrentMax", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** Max Resource Information */
  rResourceMax(...args: (string | number)[]): Promise<Record<string, unknown>> {
    return this.client.query("r.resourceMax", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** List of resource names */
  rResourceNameList(): Promise<string[]> {
    return this.client.query("r.resourceNameList") as Promise<string[]>;
  }
}

/** science telemetry */
export class ScienceApi {
  constructor(private readonly client: TeleClient) {}

  /** Number of Science Experiments Aboard */
  sciCount(): Promise<number> {
    return this.client.query("sci.count") as Promise<number>;
  }

  /** Total Science Data Aboard */
  sciDataAmount(): Promise<number> {
    return this.client.query("sci.dataAmount") as Promise<number>;
  }

  /** Experiments With Data */
  sciExperiments(): Promise<Record<string, unknown>> {
    return this.client.query("sci.experiments") as Promise<
      Record<string, unknown>
    >;
  }
}

/** sensor telemetry */
export class SensorApi {
  constructor(private readonly client: TeleClient) {}

  /** Sensor Information */
  sSensor(...args: (string | number)[]): Promise<Record<string, unknown>> {
    return this.client.query("s.sensor", ...args) as Promise<
      Record<string, unknown>
    >;
  }

  /** Temperature sensor information (TEMP) */
  sSensorTemp(): Promise<Record<string, unknown>> {
    return this.client.query("s.sensor.temp") as Promise<
      Record<string, unknown>
    >;
  }

  /** Pressure sensor information (PRES) */
  sSensorPres(): Promise<Record<string, unknown>> {
    return this.client.query("s.sensor.pres") as Promise<
      Record<string, unknown>
    >;
  }

  /** Gravity sensor information (GRAV) */
  sSensorGrav(): Promise<Record<string, unknown>> {
    return this.client.query("s.sensor.grav") as Promise<
      Record<string, unknown>
    >;
  }

  /** Acceleration sensor information (ACC) */
  sSensorAcc(): Promise<Record<string, unknown>> {
    return this.client.query("s.sensor.acc") as Promise<
      Record<string, unknown>
    >;
  }
}

/** system telemetry */
export class SystemApi {
  constructor(private readonly client: TeleClient) {}

  /** Returns an integer indicating the state of antenna. 0 - Flight scene; 1 - Paused; 2 - No power; 3 - Off; 4 - Not found. */
  pPaused(): Promise<number> {
    return this.client.query("p.paused") as Promise<number>;
  }

  /** Telemachus Version */
  aVersion(): Promise<string> {
    return this.client.query("a.version") as Promise<string>;
  }

  /** Detected Mod Integrations */
  aMods(): Promise<Record<string, unknown>> {
    return this.client.query("a.mods") as Promise<Record<string, unknown>>;
  }

  /** Physics Mode (patched_conics or n_body) (STRING) */
  aPhysicsMode(): Promise<string> {
    return this.client.query("a.physicsMode") as Promise<string>;
  }

  /** Full API Schema (JSON) */
  aSchema(): Promise<Record<string, unknown>> {
    return this.client.query("a.schema") as Promise<Record<string, unknown>>;
  }
}

/** target telemetry */
export class TargetApi {
  constructor(private readonly client: TeleClient) {}

  /** Target Name (STRING) */
  tarName(): Promise<string> {
    return this.client.query("tar.name") as Promise<string>;
  }

  /** Target Type (STRING) */
  tarType(): Promise<string> {
    return this.client.query("tar.type") as Promise<string>;
  }

  /** Target Distance (DISTANCE) */
  tarDistance(): Promise<number> {
    return this.client.query("tar.distance") as Promise<number>;
  }

  /** Surface Distance to Target (DISTANCE) */
  tarGroundDistance(): Promise<number> {
    return this.client.query("tar.groundDistance") as Promise<number>;
  }

  /** Target Relative Velocity (VELOCITY) */
  tarORelativeVelocity(): Promise<number> {
    return this.client.query("tar.o.relativeVelocity") as Promise<number>;
  }

  /** Target Velocity (VELOCITY) */
  tarOVelocity(): Promise<number> {
    return this.client.query("tar.o.velocity") as Promise<number>;
  }

  /** Target Periapsis (DISTANCE) */
  tarOPeA(): Promise<number> {
    return this.client.query("tar.o.PeA") as Promise<number>;
  }

  /** Target Apoapsis (DISTANCE) */
  tarOApA(): Promise<number> {
    return this.client.query("tar.o.ApA") as Promise<number>;
  }

  /** Target Time to Apoapsis (TIME) */
  tarOTimeToAp(): Promise<number> {
    return this.client.query("tar.o.timeToAp") as Promise<number>;
  }

  /** Target Time to Periapsis (TIME) */
  tarOTimeToPe(): Promise<number> {
    return this.client.query("tar.o.timeToPe") as Promise<number>;
  }

  /** Target Inclination (DEG) */
  tarOInclination(): Promise<number> {
    return this.client.query("tar.o.inclination") as Promise<number>;
  }

  /** Target Eccentricity */
  tarOEccentricity(): Promise<number> {
    return this.client.query("tar.o.eccentricity") as Promise<number>;
  }

  /** Target Orbital Period (TIME) */
  tarOPeriod(): Promise<number> {
    return this.client.query("tar.o.period") as Promise<number>;
  }

  /** Target Argument of Periapsis (DEG) */
  tarOArgumentOfPeriapsis(): Promise<number> {
    return this.client.query("tar.o.argumentOfPeriapsis") as Promise<number>;
  }

  /** Relative Inclination to Target (DEG) */
  tarORelativeInclination(): Promise<number> {
    return this.client.query("tar.o.relativeInclination") as Promise<number>;
  }

  /** Target Time to Transition 1 (TIME) */
  tarOTimeToTransition1(): Promise<number> {
    return this.client.query("tar.o.timeToTransition1") as Promise<number>;
  }

  /** Target Time to Transition 2 (TIME) */
  tarOTimeToTransition2(): Promise<number> {
    return this.client.query("tar.o.timeToTransition2") as Promise<number>;
  }

  /** Target Semimajor Axis (DISTANCE) */
  tarOSma(): Promise<number> {
    return this.client.query("tar.o.sma") as Promise<number>;
  }

  /** Target Longitude of Ascending Node (DEG) */
  tarOLan(): Promise<number> {
    return this.client.query("tar.o.lan") as Promise<number>;
  }

  /** Target Mean Anomaly at Epoch */
  tarOMaae(): Promise<number> {
    return this.client.query("tar.o.maae") as Promise<number>;
  }

  /** Target Time of Periapsis Passage (DATE) */
  tarOTimeOfPeriapsisPassage(): Promise<number> {
    return this.client.query("tar.o.timeOfPeriapsisPassage") as Promise<number>;
  }

  /** Target True Anomaly (DEG) */
  tarOTrueAnomaly(): Promise<number> {
    return this.client.query("tar.o.trueAnomaly") as Promise<number>;
  }

  /** Target Orbiting Body (STRING) */
  tarOOrbitingBody(): Promise<string> {
    return this.client.query("tar.o.orbitingBody") as Promise<string>;
  }

  /** Detailed Orbit Patches Info */
  tarOOrbitPatches(): Promise<number> {
    return this.client.query("tar.o.orbitPatches") as Promise<number>;
  }

  /** The orbit patch's True Anomaly at Universal Time (DEG) */
  tarOTrueAnomalyAtUTForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "tar.o.trueAnomalyAtUTForOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** The orbit patch's Universal Time for True Anomaly (DATE) */
  tarOUTForTrueAnomalyForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "tar.o.UTForTrueAnomalyForOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** The orbit patch's predicted displacement from the center of the main body at the given true anomaly */
  tarORelativePositionAtTrueAnomalyForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "tar.o.relativePositionAtTrueAnomalyForOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** The orbit patch's predicted displacement from the center of the main body at the given universal time */
  tarORelativePositionAtUTForOrbitPatch(
    ...args: (string | number)[]
  ): Promise<number> {
    return this.client.query(
      "tar.o.relativePositionAtUTForOrbitPatch",
      ...args,
    ) as Promise<number>;
  }

  /** Set Target to Celestial Body */
  tarSetTargetBody(...args: (string | number)[]): Promise<void> {
    return this.client.action("tar.setTargetBody", ...args);
  }

  /** Set Target to Vessel by Index */
  tarSetTargetVessel(...args: (string | number)[]): Promise<void> {
    return this.client.action("tar.setTargetVessel", ...args);
  }

  /** Clear Current Target */
  tarClearTarget(): Promise<void> {
    return this.client.action("tar.clearTarget");
  }
}

/** thermal telemetry */
export class ThermalApi {
  constructor(private readonly client: TeleClient) {}

  /** Hottest Part Temperature (C) (TEMP) */
  thermHottestPartTemp(): Promise<number> {
    return this.client.query("therm.hottestPartTemp") as Promise<number>;
  }

  /** Hottest Part Temperature (K) (TEMP) */
  thermHottestPartTempKelvin(): Promise<number> {
    return this.client.query("therm.hottestPartTempKelvin") as Promise<number>;
  }

  /** Hottest Part Max Temperature (K) (TEMP) */
  thermHottestPartMaxTemp(): Promise<number> {
    return this.client.query("therm.hottestPartMaxTemp") as Promise<number>;
  }

  /** Hottest Part Temperature Ratio (0-1) */
  thermHottestPartTempRatio(): Promise<number> {
    return this.client.query("therm.hottestPartTempRatio") as Promise<number>;
  }

  /** Hottest Part Name (STRING) */
  thermHottestPartName(): Promise<string> {
    return this.client.query("therm.hottestPartName") as Promise<string>;
  }

  /** Hottest Engine Temperature (K) (TEMP) */
  thermHottestEngineTemp(): Promise<number> {
    return this.client.query("therm.hottestEngineTemp") as Promise<number>;
  }

  /** Hottest Engine Max Temperature (K) (TEMP) */
  thermHottestEngineMaxTemp(): Promise<number> {
    return this.client.query("therm.hottestEngineMaxTemp") as Promise<number>;
  }

  /** Hottest Engine Temperature Ratio (0-1) */
  thermHottestEngineTempRatio(): Promise<number> {
    return this.client.query("therm.hottestEngineTempRatio") as Promise<number>;
  }

  /** Any Engine Near Overheat (>90%) */
  thermAnyEnginesOverheating(): Promise<boolean> {
    return this.client.query("therm.anyEnginesOverheating") as Promise<boolean>;
  }

  /** Heat Shield Temperature (K) (TEMP) */
  thermHeatShieldTemp(): Promise<number> {
    return this.client.query("therm.heatShieldTemp") as Promise<number>;
  }

  /** Heat Shield Temperature (C) (TEMP) */
  thermHeatShieldTempCelsius(): Promise<number> {
    return this.client.query("therm.heatShieldTempCelsius") as Promise<number>;
  }

  /** Heat Shield Thermal Flux (kW) */
  thermHeatShieldFlux(): Promise<number> {
    return this.client.query("therm.heatShieldFlux") as Promise<number>;
  }
}

/** timewarp telemetry */
export class TimewarpApi {
  constructor(private readonly client: TeleClient) {}

  /** Universal Time (DATE) */
  tUniversalTime(): Promise<number> {
    return this.client.query("t.universalTime") as Promise<number>;
  }

  /** Current Warp Rate */
  tCurrentRate(): Promise<number> {
    return this.client.query("t.currentRate") as Promise<number>;
  }

  /** Current Warp Rate Index */
  tCurrentRateIndex(): Promise<number> {
    return this.client.query("t.currentRateIndex") as Promise<number>;
  }

  /** Warp Mode (HIGH or LOW) (STRING) */
  tWarpMode(): Promise<string> {
    return this.client.query("t.warpMode") as Promise<string>;
  }

  /** Max Physics Warp Rate */
  tMaxPhysicsRate(): Promise<number> {
    return this.client.query("t.maxPhysicsRate") as Promise<number>;
  }

  /** Delta Time */
  tDeltaTime(): Promise<number> {
    return this.client.query("t.deltaTime") as Promise<number>;
  }

  /** Game Is Paused */
  tIsPaused(): Promise<boolean> {
    return this.client.query("t.isPaused") as Promise<boolean>;
  }
}

/** uncategorized telemetry */
export class UncategorizedApi {
  constructor(private readonly client: TeleClient) {}

  /** Astrogator Is Installed */
  astgAvailable(): Promise<unknown> {
    return this.client.query("astg.available") as Promise<unknown>;
  }

  /** Astrogator Instance Active */
  astgActive(): Promise<unknown> {
    return this.client.query("astg.active") as Promise<unknown>;
  }

  /** Transfer Calculation Error */
  astgErrorCondition(): Promise<unknown> {
    return this.client.query("astg.errorCondition") as Promise<unknown>;
  }

  /** Retrograde Orbit */
  astgRetrogradeOrbit(): Promise<unknown> {
    return this.client.query("astg.retrogradeOrbit") as Promise<unknown>;
  }

  /** Hyperbolic Orbit */
  astgHyperbolicOrbit(): Promise<unknown> {
    return this.client.query("astg.hyperbolicOrbit") as Promise<unknown>;
  }

  /** Number of Available Transfers */
  astgTransferCount(): Promise<unknown> {
    return this.client.query("astg.transferCount") as Promise<unknown>;
  }

  /** All Transfer Opportunities */
  astgTransfers(): Promise<unknown> {
    return this.client.query("astg.transfers") as Promise<unknown>;
  }

  /** Transfer by Index [int index] */
  astgTransfer(): Promise<unknown> {
    return this.client.query("astg.transfer") as Promise<unknown>;
  }

  /** Transfer With Active Maneuver Node */
  astgActiveTransfer(): Promise<unknown> {
    return this.client.query("astg.activeTransfer") as Promise<unknown>;
  }

  /** Next Transfer Total Delta-V (VELOCITY) */
  astgNextDeltaV(): Promise<unknown> {
    return this.client.query("astg.nextDeltaV") as Promise<unknown>;
  }

  /** Next Transfer Destination (STRING) */
  astgNextDestination(): Promise<unknown> {
    return this.client.query("astg.nextDestination") as Promise<unknown>;
  }

  /** Next Transfer Burn Time (UT) (DATE) */
  astgNextBurnTime(): Promise<unknown> {
    return this.client.query("astg.nextBurnTime") as Promise<unknown>;
  }

  /** Seconds Until Next Transfer Burn (TIME) */
  astgNextBurnCountdown(): Promise<unknown> {
    return this.client.query("astg.nextBurnCountdown") as Promise<unknown>;
  }

  /** Create Maneuver for Transfer [int index] */
  astgCreateManeuver(): Promise<void> {
    return this.client.action("astg.createManeuver");
  }

  /** Warp to Transfer Burn [int index] */
  astgWarpToBurn(): Promise<void> {
    return this.client.action("astg.warpToBurn");
  }
}

/** vessel telemetry */
export class VesselApi {
  constructor(private readonly client: TeleClient) {}

  /** Altitude (DISTANCE) */
  vAltitude(): Promise<number> {
    return this.client.query("v.altitude") as Promise<number>;
  }

  /** Height from Terrain (DISTANCE) */
  vHeightFromTerrain(): Promise<number> {
    return this.client.query("v.heightFromTerrain") as Promise<number>;
  }

  /** Height from Surface (DISTANCE) */
  vHeightFromSurface(): Promise<number> {
    return this.client.query("v.heightFromSurface") as Promise<number>;
  }

  /** Terrain Height (DISTANCE) */
  vTerrainHeight(): Promise<number> {
    return this.client.query("v.terrainHeight") as Promise<number>;
  }

  /** PQS Terrain Altitude (DISTANCE) */
  vPqsAltitude(): Promise<number> {
    return this.client.query("v.pqsAltitude") as Promise<number>;
  }

  /** Longitude (LATLON) */
  vLong(): Promise<number> {
    return this.client.query("v.long") as Promise<number>;
  }

  /** Latitude (LATLON) */
  vLat(): Promise<number> {
    return this.client.query("v.lat") as Promise<number>;
  }

  /** Surface Velocity (VELOCITY) */
  vSurfaceVelocity(): Promise<number> {
    return this.client.query("v.surfaceVelocity") as Promise<number>;
  }

  /** Surface Velocity x (VELOCITY) */
  vSurfaceVelocityx(): Promise<number> {
    return this.client.query("v.surfaceVelocityx") as Promise<number>;
  }

  /** Surface Velocity y (VELOCITY) */
  vSurfaceVelocityy(): Promise<number> {
    return this.client.query("v.surfaceVelocityy") as Promise<number>;
  }

  /** Surface Velocity z (VELOCITY) */
  vSurfaceVelocityz(): Promise<number> {
    return this.client.query("v.surfaceVelocityz") as Promise<number>;
  }

  /** Orbital Velocity (VELOCITY) */
  vOrbitalVelocity(): Promise<number> {
    return this.client.query("v.orbitalVelocity") as Promise<number>;
  }

  /** Orbital Velocity x (VELOCITY) */
  vOrbitalVelocityx(): Promise<number> {
    return this.client.query("v.orbitalVelocityx") as Promise<number>;
  }

  /** Orbital Velocity y (VELOCITY) */
  vOrbitalVelocityy(): Promise<number> {
    return this.client.query("v.orbitalVelocityy") as Promise<number>;
  }

  /** Orbital Velocity z (VELOCITY) */
  vOrbitalVelocityz(): Promise<number> {
    return this.client.query("v.orbitalVelocityz") as Promise<number>;
  }

  /** Surface Speed (VELOCITY) */
  vSurfaceSpeed(): Promise<number> {
    return this.client.query("v.surfaceSpeed") as Promise<number>;
  }

  /** Vertical Speed (VELOCITY) */
  vVerticalSpeed(): Promise<number> {
    return this.client.query("v.verticalSpeed") as Promise<number>;
  }

  /** Speed (VELOCITY) */
  vSpeed(): Promise<number> {
    return this.client.query("v.speed") as Promise<number>;
  }

  /** Surface Speed (direct) (VELOCITY) */
  vSrfSpeed(): Promise<number> {
    return this.client.query("v.srfSpeed") as Promise<number>;
  }

  /** Orbital Speed (direct) (VELOCITY) */
  vObtSpeed(): Promise<number> {
    return this.client.query("v.obtSpeed") as Promise<number>;
  }

  /** Angular Velocity (VELOCITY) */
  vAngularVelocity(): Promise<number> {
    return this.client.query("v.angularVelocity") as Promise<number>;
  }

  /** Angular Velocity x (VELOCITY) */
  vAngularVelocityx(): Promise<number> {
    return this.client.query("v.angularVelocityx") as Promise<number>;
  }

  /** Angular Velocity y (VELOCITY) */
  vAngularVelocityy(): Promise<number> {
    return this.client.query("v.angularVelocityy") as Promise<number>;
  }

  /** Angular Velocity z (VELOCITY) */
  vAngularVelocityz(): Promise<number> {
    return this.client.query("v.angularVelocityz") as Promise<number>;
  }

  /** G-Force (G) */
  vGeeForce(): Promise<number> {
    return this.client.query("v.geeForce") as Promise<number>;
  }

  /** Instantaneous G-Force (G) */
  vGeeForceImmediate(): Promise<number> {
    return this.client.query("v.geeForceImmediate") as Promise<number>;
  }

  /** Acceleration Magnitude (ACC) */
  vAcceleration(): Promise<number> {
    return this.client.query("v.acceleration") as Promise<number>;
  }

  /** Acceleration x (ACC) */
  vAccelerationx(): Promise<number> {
    return this.client.query("v.accelerationx") as Promise<number>;
  }

  /** Acceleration y (ACC) */
  vAccelerationy(): Promise<number> {
    return this.client.query("v.accelerationy") as Promise<number>;
  }

  /** Acceleration z (ACC) */
  vAccelerationz(): Promise<number> {
    return this.client.query("v.accelerationz") as Promise<number>;
  }

  /** Specific Acceleration (thrust/mass) (ACC) */
  vSpecificAcceleration(): Promise<number> {
    return this.client.query("v.specificAcceleration") as Promise<number>;
  }

  /** Orbital Perturbation Magnitude */
  vPerturbation(): Promise<number> {
    return this.client.query("v.perturbation") as Promise<number>;
  }

  /** Orbital Perturbation x */
  vPerturbationx(): Promise<number> {
    return this.client.query("v.perturbationx") as Promise<number>;
  }

  /** Orbital Perturbation y */
  vPerturbationy(): Promise<number> {
    return this.client.query("v.perturbationy") as Promise<number>;
  }

  /** Orbital Perturbation z */
  vPerturbationz(): Promise<number> {
    return this.client.query("v.perturbationz") as Promise<number>;
  }

  /** Total Mass */
  vMass(): Promise<number> {
    return this.client.query("v.mass") as Promise<number>;
  }

  /** Angular Momentum Magnitude */
  vAngularMomentum(): Promise<number> {
    return this.client.query("v.angularMomentum") as Promise<number>;
  }

  /** Angular Momentum x */
  vAngularMomentumx(): Promise<number> {
    return this.client.query("v.angularMomentumx") as Promise<number>;
  }

  /** Angular Momentum y */
  vAngularMomentumy(): Promise<number> {
    return this.client.query("v.angularMomentumy") as Promise<number>;
  }

  /** Angular Momentum z */
  vAngularMomentumz(): Promise<number> {
    return this.client.query("v.angularMomentumz") as Promise<number>;
  }

  /** Moment of Inertia */
  vMomentOfInertia(): Promise<unknown> {
    return this.client.query("v.momentOfInertia") as Promise<unknown>;
  }

  /** Center of Mass */
  vCoM(): Promise<unknown> {
    return this.client.query("v.CoM") as Promise<unknown>;
  }

  /** Atmospheric Density (DENSITY) */
  vAtmosphericDensity(): Promise<number> {
    return this.client.query("v.atmosphericDensity") as Promise<number>;
  }

  /** Dynamic Pressure (kPa) (DYNAMICPRESSURE) */
  vDynamicPressurekPa(): Promise<number> {
    return this.client.query("v.dynamicPressurekPa") as Promise<number>;
  }

  /** Dynamic Pressure (Pa) (DYNAMICPRESSURE) */
  vDynamicPressure(): Promise<number> {
    return this.client.query("v.dynamicPressure") as Promise<number>;
  }

  /** Static Pressure (kPa) (PRES) */
  vStaticPressurekPa(): Promise<number> {
    return this.client.query("v.staticPressurekPa") as Promise<number>;
  }

  /** Static Pressure (kPa, via FlightGlobals) (PRES) */
  vStaticPressure(): Promise<number> {
    return this.client.query("v.staticPressure") as Promise<number>;
  }

  /** Atmospheric Pressure (Pa) (PRES) */
  vAtmosphericPressurePa(): Promise<number> {
    return this.client.query("v.atmosphericPressurePa") as Promise<number>;
  }

  /** Atmospheric Pressure (atm) (PRES) */
  vAtmosphericPressure(): Promise<number> {
    return this.client.query("v.atmosphericPressure") as Promise<number>;
  }

  /** Atmospheric Temperature (TEMP) */
  vAtmosphericTemperature(): Promise<number> {
    return this.client.query("v.atmosphericTemperature") as Promise<number>;
  }

  /** External Temperature (TEMP) */
  vExternalTemperature(): Promise<number> {
    return this.client.query("v.externalTemperature") as Promise<number>;
  }

  /** Mach Number */
  vMach(): Promise<number> {
    return this.client.query("v.mach") as Promise<number>;
  }

  /** Speed of Sound (VELOCITY) */
  vSpeedOfSound(): Promise<number> {
    return this.client.query("v.speedOfSound") as Promise<number>;
  }

  /** Indicated Air Speed (VELOCITY) */
  vIndicatedAirSpeed(): Promise<number> {
    return this.client.query("v.indicatedAirSpeed") as Promise<number>;
  }

  /** In Direct Sunlight */
  vDirectSunlight(): Promise<boolean> {
    return this.client.query("v.directSunlight") as Promise<boolean>;
  }

  /** Distance to Sun (DISTANCE) */
  vDistanceToSun(): Promise<number> {
    return this.client.query("v.distanceToSun") as Promise<number>;
  }

  /** Solar Flux */
  vSolarFlux(): Promise<number> {
    return this.client.query("v.solarFlux") as Promise<number>;
  }

  /** Name (STRING) */
  vName(): Promise<string> {
    return this.client.query("v.name") as Promise<string>;
  }

  /** Body Name (STRING) */
  vBody(): Promise<string> {
    return this.client.query("v.body") as Promise<string>;
  }

  /** Vessel Situation (STRING) */
  vSituation(): Promise<string> {
    return this.client.query("v.situation") as Promise<string>;
  }

  /** Vessel Situation (readable) (STRING) */
  vSituationString(): Promise<string> {
    return this.client.query("v.situationString") as Promise<string>;
  }

  /** Vessel Type (STRING) */
  vVesselType(): Promise<string> {
    return this.client.query("v.vesselType") as Promise<string>;
  }

  /** Is Landed */
  vLanded(): Promise<boolean> {
    return this.client.query("v.landed") as Promise<boolean>;
  }

  /** Is Splashed */
  vSplashed(): Promise<boolean> {
    return this.client.query("v.splashed") as Promise<boolean>;
  }

  /** Is Landed or Splashed */
  vLandedOrSplashed(): Promise<boolean> {
    return this.client.query("v.landedOrSplashed") as Promise<boolean>;
  }

  /** Landed At (biome/location) (STRING) */
  vLandedAt(): Promise<string> {
    return this.client.query("v.landedAt") as Promise<string>;
  }

  /** Current Biome Name (STRING) */
  vBiome(): Promise<string> {
    return this.client.query("v.biome") as Promise<string>;
  }

  /** Current Biome Name (Localized) (STRING) */
  vBiomeLocalized(): Promise<string> {
    return this.client.query("v.biomeLocalized") as Promise<string>;
  }

  /** Is EVA */
  vIsEVA(): Promise<boolean> {
    return this.client.query("v.isEVA") as Promise<boolean>;
  }

  /** Is Active Vessel */
  vIsActiveVessel(): Promise<boolean> {
    return this.client.query("v.isActiveVessel") as Promise<boolean>;
  }

  /** Is Controllable */
  vIsControllable(): Promise<boolean> {
    return this.client.query("v.isControllable") as Promise<boolean>;
  }

  /** Is Commandable */
  vIsCommandable(): Promise<boolean> {
    return this.client.query("v.isCommandable") as Promise<boolean>;
  }

  /** Mission Time (TIME) */
  vMissionTime(): Promise<number> {
    return this.client.query("v.missionTime") as Promise<number>;
  }

  /** Mission Elapsed Time (formatted) (STRING) */
  vMissionTimeString(): Promise<string> {
    return this.client.query("v.missionTimeString") as Promise<string>;
  }

  /** Launch Time (DATE) */
  vLaunchTime(): Promise<number> {
    return this.client.query("v.launchTime") as Promise<number>;
  }

  /** Current Stage */
  vCurrentStage(): Promise<number> {
    return this.client.query("v.currentStage") as Promise<number>;
  }

  /** Crew Count */
  vCrewCount(): Promise<number> {
    return this.client.query("v.crewCount") as Promise<number>;
  }

  /** Crew Capacity */
  vCrewCapacity(): Promise<number> {
    return this.client.query("v.crewCapacity") as Promise<number>;
  }

  /** Crew Names */
  vCrew(): Promise<string[]> {
    return this.client.query("v.crew") as Promise<string[]>;
  }

  /** Local Up Axis */
  vUpAxis(): Promise<unknown> {
    return this.client.query("v.upAxis") as Promise<unknown>;
  }

  /** Terrain Normal */
  vTerrainNormal(): Promise<unknown> {
    return this.client.query("v.terrainNormal") as Promise<unknown>;
  }

  /** Is Loaded */
  vLoaded(): Promise<boolean> {
    return this.client.query("v.loaded") as Promise<boolean>;
  }

  /** Is Packed (on rails) */
  vPacked(): Promise<boolean> {
    return this.client.query("v.packed") as Promise<boolean>;
  }

  /** Angle to Prograde (DEG) */
  vAngleToPrograde(): Promise<number> {
    return this.client.query("v.angleToPrograde") as Promise<number>;
  }
}

/** Attach typed accessors to a client */
export function attachAccessors(client: TeleClient) {
  return {
    alarm: new AlarmApi(client),
    body: new BodyApi(client),
    career: new CareerApi(client),
    comms: new CommsApi(client),
    deltav: new DeltavApi(client),
    docking: new DockingApi(client),
    far: new FarApi(client),
    fbw: new FbwApi(client),
    flight: new FlightApi(client),
    kerbalism: new KerbalismApi(client),
    landing: new LandingApi(client),
    maneuver: new ManeuverApi(client),
    map: new MapApi(client),
    mechjeb: new MechjebApi(client),
    navigation: new NavigationApi(client),
    orbit: new OrbitApi(client),
    principia: new PrincipiaApi(client),
    realchute: new RealchuteApi(client),
    resource: new ResourceApi(client),
    science: new ScienceApi(client),
    sensor: new SensorApi(client),
    system: new SystemApi(client),
    target: new TargetApi(client),
    thermal: new ThermalApi(client),
    timewarp: new TimewarpApi(client),
    uncategorized: new UncategorizedApi(client),
    vessel: new VesselApi(client),
  };
}

/** Metadata for each API key */
export const KEY_META: Record<
  string,
  {
    description: string;
    units?: string;
    isAction: boolean;
    plotable: boolean;
    category?: string;
    returnType?: string;
    requiresMod?: string;
  }
> = {
  "alarm.count": {
    description: "Number of Active Alarms",
    isAction: false,
    plotable: true,
    category: "alarm",
    returnType: "int",
  },
  "alarm.list": {
    description: "All Alarms",
    isAction: false,
    plotable: false,
    category: "alarm",
    returnType: "object",
  },
  "alarm.nextAlarm": {
    description: "Next Alarm to Trigger",
    isAction: false,
    plotable: false,
    category: "alarm",
    returnType: "object",
  },
  "alarm.timeToNext": {
    description: "Time Until Next Alarm",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "alarm",
    returnType: "double",
  },
  "astg.available": {
    description: "Astrogator Is Installed",
    isAction: false,
    plotable: true,
  },
  "astg.active": {
    description: "Astrogator Instance Active",
    isAction: false,
    plotable: true,
  },
  "astg.errorCondition": {
    description: "Transfer Calculation Error",
    isAction: false,
    plotable: true,
  },
  "astg.retrogradeOrbit": {
    description: "Retrograde Orbit",
    isAction: false,
    plotable: true,
  },
  "astg.hyperbolicOrbit": {
    description: "Hyperbolic Orbit",
    isAction: false,
    plotable: true,
  },
  "astg.transferCount": {
    description: "Number of Available Transfers",
    isAction: false,
    plotable: true,
  },
  "astg.transfers": {
    description: "All Transfer Opportunities",
    isAction: false,
    plotable: false,
  },
  "astg.transfer": {
    description: "Transfer by Index [int index]",
    isAction: false,
    plotable: false,
  },
  "astg.activeTransfer": {
    description: "Transfer With Active Maneuver Node",
    isAction: false,
    plotable: false,
  },
  "astg.nextDeltaV": {
    description: "Next Transfer Total Delta-V",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
  },
  "astg.nextDestination": {
    description: "Next Transfer Destination",
    units: "STRING",
    isAction: false,
    plotable: true,
  },
  "astg.nextBurnTime": {
    description: "Next Transfer Burn Time (UT)",
    units: "DATE",
    isAction: false,
    plotable: true,
  },
  "astg.nextBurnCountdown": {
    description: "Seconds Until Next Transfer Burn",
    units: "TIME",
    isAction: false,
    plotable: true,
  },
  "astg.createManeuver": {
    description: "Create Maneuver for Transfer [int index]",
    isAction: true,
    plotable: true,
  },
  "astg.warpToBurn": {
    description: "Warp to Transfer Burn [int index]",
    isAction: true,
    plotable: true,
  },
  "dv.ready": {
    description: "Delta-V Calculator Is Ready",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.totalDVVac": {
    description: "Total Delta-V (Vacuum)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.totalDVASL": {
    description: "Total Delta-V (Sea Level)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.totalDVActual": {
    description: "Total Delta-V (Current Atmosphere)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.totalBurnTime": {
    description: "Total Burn Time",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageCount": {
    description: "Number of Stages with Delta-V Info",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "int",
  },
  "dv.stage": {
    description: "Full Stage Info",
    isAction: false,
    plotable: false,
    category: "deltav",
    returnType: "object",
  },
  "dv.stages": {
    description: "All Stages Info",
    isAction: false,
    plotable: false,
    category: "deltav",
    returnType: "object",
  },
  "dv.stageDVVac": {
    description: "Stage Delta-V Vacuum",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageDVASL": {
    description: "Stage Delta-V ASL",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageDVActual": {
    description: "Stage Delta-V Actual",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageTWRVac": {
    description: "Stage TWR Vacuum",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageTWRASL": {
    description: "Stage TWR ASL",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageTWRActual": {
    description: "Stage TWR Actual",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageISPVac": {
    description: "Stage ISP Vacuum",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageISPASL": {
    description: "Stage ISP ASL",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageISPActual": {
    description: "Stage ISP Actual",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageThrustVac": {
    description: "Stage Thrust Vacuum",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageThrustASL": {
    description: "Stage Thrust ASL",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageThrustActual": {
    description: "Stage Thrust Actual",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageBurnTime": {
    description: "Stage Burn Time",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageMass": {
    description: "Stage Total Mass",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageDryMass": {
    description: "Stage Dry Mass",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageFuelMass": {
    description: "Stage Fuel Mass",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageStartMass": {
    description: "Stage Start Mass",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "dv.stageEndMass": {
    description: "Stage End Mass",
    isAction: false,
    plotable: true,
    category: "deltav",
    returnType: "double",
  },
  "far.available": {
    description: "FAR Is Installed",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "bool",
    requiresMod: "far",
  },
  "far.liftCoeff": {
    description: "Lift Coefficient (Cl)",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.dragCoeff": {
    description: "Drag Coefficient (Cd)",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.refArea": {
    description: "Reference Area (m²)",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.ballisticCoeff": {
    description: "Ballistic Coefficient",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.dynPres": {
    description: "Dynamic Pressure (FAR)",
    units: "DYNAMICPRESSURE",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.termVel": {
    description: "Terminal Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.tsfc": {
    description: "Thrust Specific Fuel Consumption",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.aoa": {
    description: "Angle of Attack",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.sideslip": {
    description: "Sideslip Angle",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.stallFrac": {
    description: "Stall Fraction (0-1)",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "double",
    requiresMod: "far",
  },
  "far.flapSetting": {
    description: "Flap Deflection Level (0-3, -1 if no flaps)",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "int",
    requiresMod: "far",
  },
  "far.spoiler": {
    description: "Spoilers Active",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "bool",
    requiresMod: "far",
  },
  "far.increaseFlaps": {
    description: "Increase Flap Deflection",
    isAction: true,
    plotable: true,
    category: "far",
    returnType: "bool",
    requiresMod: "far",
  },
  "far.decreaseFlaps": {
    description: "Decrease Flap Deflection",
    isAction: true,
    plotable: true,
    category: "far",
    returnType: "bool",
    requiresMod: "far",
  },
  "far.setSpoilers": {
    description: "Set Spoilers",
    isAction: true,
    plotable: true,
    category: "far",
    returnType: "bool",
    requiresMod: "far",
  },
  "far.voxelized": {
    description: "Vessel Has Valid Voxelization",
    isAction: false,
    plotable: true,
    category: "far",
    returnType: "bool",
    requiresMod: "far",
  },
  "v.setYaw": {
    description: "Yaw",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "v.setPitch": {
    description: "Pitch",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "v.setRoll": {
    description: "Roll",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "v.setFbW": {
    description: "Set Fly by Wire On or Off",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "v.setPitchYawRollXYZ": {
    description: "Set pitch, yaw, roll, X, Y and Z",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "v.setAttitude": {
    description: "Set pitch, yaw, roll",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "v.setTranslation": {
    description: "Set X, Y and Z",
    isAction: true,
    plotable: true,
    category: "fbw",
    returnType: "int",
  },
  "f.throttle": {
    description: "Throttle",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.pitchInput": {
    description: "Pitch Control Input",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.yawInput": {
    description: "Yaw Control Input",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.rollInput": {
    description: "Roll Control Input",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.xInput": {
    description: "RCS X Translation Input",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.yInput": {
    description: "RCS Y Translation Input",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.zInput": {
    description: "RCS Z Translation Input",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.pitchTrim": {
    description: "Pitch Trim",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.yawTrim": {
    description: "Yaw Trim",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.rollTrim": {
    description: "Roll Trim",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "double",
  },
  "f.isNeutral": {
    description: "Controls Are Neutral",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "f.killRot": {
    description: "SAS Kill Rotation Active",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.rcsValue": {
    description: "Query RCS value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.sasValue": {
    description: "Query SAS value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.lightValue": {
    description: "Query light value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.brakeValue": {
    description: "Query brake value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.gearValue": {
    description: "Query gear value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.abortValue": {
    description: "Query abort value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag1Value": {
    description: "Query Action Group 1 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag2Value": {
    description: "Query Action Group 2 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag3Value": {
    description: "Query Action Group 3 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag4Value": {
    description: "Query Action Group 4 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag5Value": {
    description: "Query Action Group 5 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag6Value": {
    description: "Query Action Group 6 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag7Value": {
    description: "Query Action Group 7 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag8Value": {
    description: "Query Action Group 8 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag9Value": {
    description: "Query Action Group 9 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.ag10Value": {
    description: "Query Action Group 10 value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "v.precisionControlValue": {
    description: "Query precision controls value",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "f.sasMode": {
    description: "Current SAS Mode",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "string",
  },
  "f.sasEnabled": {
    description: "SAS Autopilot Enabled",
    isAction: false,
    plotable: true,
    category: "flight",
    returnType: "bool",
  },
  "f.setSASMode": {
    description: "Set SAS Mode",
    isAction: true,
    plotable: true,
    category: "flight",
    returnType: "string",
  },
  "f.setPitchTrim": {
    description: "Set Pitch Trim",
    isAction: true,
    plotable: true,
    category: "flight",
    returnType: "int",
  },
  "f.setYawTrim": {
    description: "Set Yaw Trim",
    isAction: true,
    plotable: true,
    category: "flight",
    returnType: "int",
  },
  "f.setRollTrim": {
    description: "Set Roll Trim",
    isAction: true,
    plotable: true,
    category: "flight",
    returnType: "int",
  },
  "kerbalism.available": {
    description: "Kerbalism Is Installed",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.features": {
    description: "Kerbalism Enabled Features",
    isAction: false,
    plotable: false,
    category: "kerbalism",
    returnType: "object",
    requiresMod: "kerbalism",
  },
  "kerbalism.radiationEnabled": {
    description: "Radiation System Enabled",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.radiation": {
    description: "Environment Radiation (rad/h)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.habitatRadiation": {
    description: "Habitat Radiation (rad/h)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.magnetosphere": {
    description: "Inside Magnetosphere",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.innerBelt": {
    description: "Inside Inner Radiation Belt",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.outerBelt": {
    description: "Inside Outer Radiation Belt",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.stellarActivity": {
    description: "Stellar Activity (0-1)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.habitatVolume": {
    description: "Habitat Volume (m³)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.habitatSurface": {
    description: "Habitat Surface Area (m²)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.habitatPressure": {
    description: "Habitat Pressure (0-1)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.co2Level": {
    description: "CO2 Poisoning Level",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.radiationShielding": {
    description: "Radiation Shielding (0-1)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.habitatLivingSpace": {
    description: "Living Space Comfort Factor",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.habitatComfort": {
    description: "Overall Habitat Comfort Factor",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.connectionLinked": {
    description: "Signal Connected",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.connectionRate": {
    description: "Data Rate (MB/s)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.connectionTransmitting": {
    description: "Files Transmitting",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "int",
    requiresMod: "kerbalism",
  },
  "kerbalism.connection": {
    description: "Full Connection Info",
    isAction: false,
    plotable: false,
    category: "kerbalism",
    returnType: "object",
    requiresMod: "kerbalism",
  },
  "kerbalism.experimentRunning": {
    description: "Experiment Is Running [string experiment_id]",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.stellarStormIncoming": {
    description: "Stellar Storm Incoming",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.stellarStormInProgress": {
    description: "Stellar Storm In Progress",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.stellarStormState": {
    description: "Stellar Storm State (0=none, 1=incoming, 2=active)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "int",
    requiresMod: "kerbalism",
  },
  "kerbalism.stellarStormDuration": {
    description: "Stellar Storm Duration (s)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.stellarStormStartTime": {
    description: "Stellar Storm Start Time (UT)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.envTemperature": {
    description: "Environment Temperature (K)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.envTempDiff": {
    description: "Temp Difference from Survival",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.envStormRadiation": {
    description: "Storm Radiation Dose",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.breathable": {
    description: "Atmosphere Breathable",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.inAtmosphere": {
    description: "Inside Atmosphere",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.malfunction": {
    description: "Part Malfunction Active",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.critical": {
    description: "Critical Failure Active",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "bool",
    requiresMod: "kerbalism",
  },
  "kerbalism.solarExposure": {
    description: "Solar Panel Average Exposure (0-1)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.drivesFreeSpace": {
    description: "Drive Free Space (MB)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.drivesCapacity": {
    description: "Drive Total Capacity (MB)",
    isAction: false,
    plotable: true,
    category: "kerbalism",
    returnType: "double",
    requiresMod: "kerbalism",
  },
  "kerbalism.crew": {
    description: "Crew Health Summary",
    isAction: false,
    plotable: false,
    category: "kerbalism",
    returnType: "object",
    requiresMod: "kerbalism",
  },
  "land.timeToImpact": {
    description: "Estimated Seconds to Impact",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.speedAtImpact": {
    description: "Predicted Speed at Impact (current thrust)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.bestSpeedAtImpact": {
    description: "Predicted Speed at Impact (max thrust)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.suicideBurnCountdown": {
    description: "Seconds Until Suicide Burn Start",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.predictedLat": {
    description: "Predicted Landing Latitude",
    units: "LATLON",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.predictedLon": {
    description: "Predicted Landing Longitude",
    units: "LATLON",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.predictedAlt": {
    description: "Predicted Landing Terrain Altitude",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "land.slopeAngle": {
    description: "Terrain Slope Angle Under Vessel",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "landing",
    returnType: "double",
  },
  "mj.available": {
    description: "MechJeb Is Installed",
    isAction: false,
    plotable: true,
    category: "mechjeb",
    returnType: "bool",
    requiresMod: "mechjeb",
  },
  "t.universalTime": {
    description: "Universal Time",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "double",
  },
  "t.currentRate": {
    description: "Current Warp Rate",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "double",
  },
  "t.currentRateIndex": {
    description: "Current Warp Rate Index",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "double",
  },
  "t.warpMode": {
    description: "Warp Mode (HIGH or LOW)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "string",
  },
  "t.maxPhysicsRate": {
    description: "Max Physics Warp Rate",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "double",
  },
  "t.deltaTime": {
    description: "Delta Time",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "double",
  },
  "t.isPaused": {
    description: "Game Is Paused",
    isAction: false,
    plotable: true,
    category: "timewarp",
    returnType: "bool",
  },
  "tar.name": {
    description: "Target Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "string",
  },
  "tar.type": {
    description: "Target Type",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "string",
  },
  "tar.distance": {
    description: "Target Distance",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.groundDistance": {
    description: "Surface Distance to Target",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.relativeVelocity": {
    description: "Target Relative Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.velocity": {
    description: "Target Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.PeA": {
    description: "Target Periapsis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.ApA": {
    description: "Target Apoapsis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.timeToAp": {
    description: "Target Time to Apoapsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.timeToPe": {
    description: "Target Time to Periapsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.inclination": {
    description: "Target Inclination",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.eccentricity": {
    description: "Target Eccentricity",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.period": {
    description: "Target Orbital Period",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.argumentOfPeriapsis": {
    description: "Target Argument of Periapsis",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.relativeInclination": {
    description: "Relative Inclination to Target",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.timeToTransition1": {
    description: "Target Time to Transition 1",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.timeToTransition2": {
    description: "Target Time to Transition 2",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.sma": {
    description: "Target Semimajor Axis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.lan": {
    description: "Target Longitude of Ascending Node",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.maae": {
    description: "Target Mean Anomaly at Epoch",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.timeOfPeriapsisPassage": {
    description: "Target Time of Periapsis Passage",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.trueAnomaly": {
    description: "Target True Anomaly",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.orbitingBody": {
    description: "Target Orbiting Body",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "string",
  },
  "tar.o.orbitPatches": {
    description: "Detailed Orbit Patches Info",
    isAction: false,
    plotable: false,
    category: "target",
    returnType: "double",
  },
  "tar.o.trueAnomalyAtUTForOrbitPatch": {
    description: "The orbit patch's True Anomaly at Universal Time",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.UTForTrueAnomalyForOrbitPatch": {
    description: "The orbit patch's Universal Time for True Anomaly",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.relativePositionAtTrueAnomalyForOrbitPatch": {
    description:
      "The orbit patch's predicted displacement from the center of the main body at the given true anomaly",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.o.relativePositionAtUTForOrbitPatch": {
    description:
      "The orbit patch's predicted displacement from the center of the main body at the given universal time",
    isAction: false,
    plotable: true,
    category: "target",
    returnType: "double",
  },
  "tar.setTargetBody": {
    description: "Set Target to Celestial Body",
    isAction: true,
    plotable: true,
    category: "target",
    returnType: "int",
  },
  "tar.setTargetVessel": {
    description: "Set Target to Vessel by Index",
    isAction: true,
    plotable: true,
    category: "target",
    returnType: "int",
  },
  "tar.clearTarget": {
    description: "Clear Current Target",
    isAction: true,
    plotable: true,
    category: "target",
    returnType: "int",
  },
  "dock.ax": {
    description: "Docking x Angle",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "docking",
    returnType: "double",
  },
  "dock.ay": {
    description: "Relative Pitch Angle",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "docking",
    returnType: "double",
  },
  "dock.az": {
    description: "Docking z Angle",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "docking",
    returnType: "double",
  },
  "dock.x": {
    description: "Target x Distance",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "docking",
    returnType: "double",
  },
  "dock.y": {
    description: "Target y Distance",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "docking",
    returnType: "double",
  },
  "principia.available": {
    description: "Principia Is Installed",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "bool",
    requiresMod: "principia",
  },
  "principia.version": {
    description: "Principia Assembly Version",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "string",
    requiresMod: "principia",
  },
  "principia.active": {
    description: "Principia Plugin Running",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "bool",
    requiresMod: "principia",
  },
  "principia.analysisProgress": {
    description: "Orbit Analysis Progress (0-1)",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "double",
    requiresMod: "principia",
  },
  "principia.missionDuration": {
    description: "Analysis Mission Duration (s)",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.sma": {
    description: "Mean Semimajor Axis (Principia)",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.eccentricity": {
    description: "Mean Eccentricity (Principia)",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.inclination": {
    description: "Mean Inclination (Principia)",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.lan": {
    description: "Mean Longitude of Ascending Node (Principia)",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.argumentOfPeriapsis": {
    description: "Mean Argument of Periapsis (Principia)",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.PeA": {
    description: "Mean Periapsis Altitude (Principia)",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.ApA": {
    description: "Mean Apoapsis Altitude (Principia)",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.smaRange": {
    description: "Mean SMA Range {min,max} (Principia)",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
    requiresMod: "principia",
  },
  "o.mean.eccentricityRange": {
    description: "Mean Eccentricity Range (Principia)",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
    requiresMod: "principia",
  },
  "o.mean.inclinationRange": {
    description: "Mean Inclination Range (Principia)",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
    requiresMod: "principia",
  },
  "o.mean.PeARange": {
    description: "Mean Periapsis Altitude Range (Principia)",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
    requiresMod: "principia",
  },
  "o.mean.ApARange": {
    description: "Mean Apoapsis Altitude Range (Principia)",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
    requiresMod: "principia",
  },
  "o.mean.siderealPeriod": {
    description: "Sidereal Period (Principia)",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.nodalPeriod": {
    description: "Nodal Period (Principia)",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.anomalisticPeriod": {
    description: "Anomalistic Period (Principia)",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.nodalPrecession": {
    description: "Nodal Precession Rate (rad/s, Principia)",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
    requiresMod: "principia",
  },
  "o.mean.recurrence": {
    description: "Orbit Recurrence Info (Principia)",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
    requiresMod: "principia",
  },
  "principia.plan.count": {
    description: "Number of Planned Burns",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "int",
    requiresMod: "principia",
  },
  "principia.plan.guidance": {
    description: "Navball Guidance Active",
    isAction: false,
    plotable: true,
    category: "principia",
    returnType: "bool",
    requiresMod: "principia",
  },
  "principia.plan.burns": {
    description: "All Planned Burns",
    isAction: false,
    plotable: false,
    category: "principia",
    returnType: "object",
    requiresMod: "principia",
  },
  "principia.plan.burn": {
    description: "Planned Burn by Index",
    isAction: false,
    plotable: false,
    category: "principia",
    returnType: "object",
    requiresMod: "principia",
  },
  "principia.analysis": {
    description: "Complete Orbit Analysis (Principia)",
    isAction: false,
    plotable: false,
    category: "principia",
    returnType: "object",
    requiresMod: "principia",
  },
  "rc.available": {
    description: "RealChute Is Installed",
    isAction: false,
    plotable: true,
    category: "realchute",
    returnType: "bool",
    requiresMod: "realchute",
  },
  "rc.count": {
    description: "Number of RealChute Parts",
    isAction: false,
    plotable: true,
    category: "realchute",
    returnType: "int",
    requiresMod: "realchute",
  },
  "rc.anyDeployed": {
    description: "Any Chute Deployed",
    isAction: false,
    plotable: true,
    category: "realchute",
    returnType: "bool",
    requiresMod: "realchute",
  },
  "rc.safeState": {
    description: "Deployment Safety (SAFE/RISKY/DANGEROUS)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "realchute",
    returnType: "string",
    requiresMod: "realchute",
  },
  "rc.chutes": {
    description: "All Chute Status",
    isAction: false,
    plotable: false,
    category: "realchute",
    returnType: "object",
    requiresMod: "realchute",
  },
  "rc.deploy": {
    description: "Deploy All Chutes",
    isAction: true,
    plotable: true,
    category: "realchute",
    returnType: "bool",
    requiresMod: "realchute",
  },
  "rc.cut": {
    description: "Cut All Chutes",
    isAction: true,
    plotable: true,
    category: "realchute",
    returnType: "bool",
    requiresMod: "realchute",
  },
  "rc.arm": {
    description: "Arm All Chutes",
    isAction: true,
    plotable: true,
    category: "realchute",
    returnType: "bool",
    requiresMod: "realchute",
  },
  "rc.disarm": {
    description: "Disarm All Chutes",
    isAction: true,
    plotable: true,
    category: "realchute",
    returnType: "bool",
    requiresMod: "realchute",
  },
  "s.sensor": {
    description: "Sensor Information",
    isAction: false,
    plotable: true,
    category: "sensor",
    returnType: "object",
  },
  "s.sensor.temp": {
    description: "Temperature sensor information",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "sensor",
    returnType: "object",
  },
  "s.sensor.pres": {
    description: "Pressure sensor information",
    units: "PRES",
    isAction: false,
    plotable: true,
    category: "sensor",
    returnType: "object",
  },
  "s.sensor.grav": {
    description: "Gravity sensor information",
    units: "GRAV",
    isAction: false,
    plotable: true,
    category: "sensor",
    returnType: "object",
  },
  "s.sensor.acc": {
    description: "Acceleration sensor information",
    units: "ACC",
    isAction: false,
    plotable: true,
    category: "sensor",
    returnType: "object",
  },
  "r.resource": {
    description: "Resource Information",
    isAction: false,
    plotable: false,
    category: "resource",
    returnType: "object",
  },
  "r.resourceCurrent": {
    description: "Resource Information for Current Stage",
    isAction: false,
    plotable: false,
    category: "resource",
    returnType: "object",
  },
  "r.resourceCurrentMax": {
    description: "Max Resource Information for Current Stage",
    isAction: false,
    plotable: false,
    category: "resource",
    returnType: "object",
  },
  "r.resourceMax": {
    description: "Max Resource Information",
    isAction: false,
    plotable: false,
    category: "resource",
    returnType: "object",
  },
  "r.resourceNameList": {
    description: "List of resource names",
    isAction: false,
    plotable: false,
    category: "resource",
    returnType: "string[]",
  },
  "sci.count": {
    description: "Number of Science Experiments Aboard",
    isAction: false,
    plotable: true,
    category: "science",
    returnType: "int",
  },
  "sci.dataAmount": {
    description: "Total Science Data Aboard",
    isAction: false,
    plotable: true,
    category: "science",
    returnType: "double",
  },
  "sci.experiments": {
    description: "Experiments With Data",
    isAction: false,
    plotable: false,
    category: "science",
    returnType: "object",
  },
  "career.funds": {
    description: "Available Funds",
    isAction: false,
    plotable: true,
    category: "career",
    returnType: "double",
  },
  "career.reputation": {
    description: "Current Reputation",
    isAction: false,
    plotable: true,
    category: "career",
    returnType: "double",
  },
  "career.science": {
    description: "Available Science Points",
    isAction: false,
    plotable: true,
    category: "career",
    returnType: "double",
  },
  "career.mode": {
    description: "Game Mode (CAREER/SCIENCE/SANDBOX)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "career",
    returnType: "string",
  },
  "comm.connected": {
    description: "CommNet Is Connected",
    isAction: false,
    plotable: true,
    category: "comms",
    returnType: "bool",
  },
  "comm.signalStrength": {
    description: "CommNet Signal Strength (0-1)",
    isAction: false,
    plotable: true,
    category: "comms",
    returnType: "double",
  },
  "comm.controlState": {
    description: "CommNet Control State (0=none, 1=partial, 2=full)",
    isAction: false,
    plotable: true,
    category: "comms",
    returnType: "int",
  },
  "comm.controlStateName": {
    description: "CommNet Control State Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "comms",
    returnType: "string",
  },
  "comm.signalDelay": {
    description: "CommNet Signal Delay (seconds)",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "comms",
    returnType: "double",
  },
  "p.paused": {
    description:
      "Returns an integer indicating the state of antenna. 0 - Flight scene; 1 - Paused; 2 - No power; 3 - Off; 4 - Not found.",
    isAction: false,
    plotable: true,
    category: "system",
    returnType: "int",
  },
  "a.version": {
    description: "Telemachus Version",
    isAction: false,
    plotable: true,
    category: "system",
    returnType: "string",
  },
  "a.mods": {
    description: "Detected Mod Integrations",
    isAction: false,
    plotable: false,
    category: "system",
    returnType: "object",
  },
  "a.physicsMode": {
    description: "Physics Mode (patched_conics or n_body)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "system",
    returnType: "string",
  },
  "a.schema": {
    description: "Full API Schema (JSON)",
    isAction: false,
    plotable: false,
    category: "system",
    returnType: "object",
  },
  "therm.hottestPartTemp": {
    description: "Hottest Part Temperature (C)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.hottestPartTempKelvin": {
    description: "Hottest Part Temperature (K)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.hottestPartMaxTemp": {
    description: "Hottest Part Max Temperature (K)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.hottestPartTempRatio": {
    description: "Hottest Part Temperature Ratio (0-1)",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.hottestPartName": {
    description: "Hottest Part Name",
    units: "STRING",
    isAction: false,
    plotable: false,
    category: "thermal",
    returnType: "string",
  },
  "therm.hottestEngineTemp": {
    description: "Hottest Engine Temperature (K)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.hottestEngineMaxTemp": {
    description: "Hottest Engine Max Temperature (K)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.hottestEngineTempRatio": {
    description: "Hottest Engine Temperature Ratio (0-1)",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.anyEnginesOverheating": {
    description: "Any Engine Near Overheat (>90%)",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "bool",
  },
  "therm.heatShieldTemp": {
    description: "Heat Shield Temperature (K)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.heatShieldTempCelsius": {
    description: "Heat Shield Temperature (C)",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "therm.heatShieldFlux": {
    description: "Heat Shield Thermal Flux (kW)",
    isAction: false,
    plotable: true,
    category: "thermal",
    returnType: "double",
  },
  "v.altitude": {
    description: "Altitude",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.heightFromTerrain": {
    description: "Height from Terrain",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.heightFromSurface": {
    description: "Height from Surface",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.terrainHeight": {
    description: "Terrain Height",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.pqsAltitude": {
    description: "PQS Terrain Altitude",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.long": {
    description: "Longitude",
    units: "LATLON",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.lat": {
    description: "Latitude",
    units: "LATLON",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.surfaceVelocity": {
    description: "Surface Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.surfaceVelocityx": {
    description: "Surface Velocity x",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.surfaceVelocityy": {
    description: "Surface Velocity y",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.surfaceVelocityz": {
    description: "Surface Velocity z",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.orbitalVelocity": {
    description: "Orbital Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.orbitalVelocityx": {
    description: "Orbital Velocity x",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.orbitalVelocityy": {
    description: "Orbital Velocity y",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.orbitalVelocityz": {
    description: "Orbital Velocity z",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.surfaceSpeed": {
    description: "Surface Speed",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.verticalSpeed": {
    description: "Vertical Speed",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.speed": {
    description: "Speed",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.srfSpeed": {
    description: "Surface Speed (direct)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.obtSpeed": {
    description: "Orbital Speed (direct)",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularVelocity": {
    description: "Angular Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularVelocityx": {
    description: "Angular Velocity x",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularVelocityy": {
    description: "Angular Velocity y",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularVelocityz": {
    description: "Angular Velocity z",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.geeForce": {
    description: "G-Force",
    units: "G",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.geeForceImmediate": {
    description: "Instantaneous G-Force",
    units: "G",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.acceleration": {
    description: "Acceleration Magnitude",
    units: "ACC",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.accelerationx": {
    description: "Acceleration x",
    units: "ACC",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.accelerationy": {
    description: "Acceleration y",
    units: "ACC",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.accelerationz": {
    description: "Acceleration z",
    units: "ACC",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.specificAcceleration": {
    description: "Specific Acceleration (thrust/mass)",
    units: "ACC",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.perturbation": {
    description: "Orbital Perturbation Magnitude",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.perturbationx": {
    description: "Orbital Perturbation x",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.perturbationy": {
    description: "Orbital Perturbation y",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.perturbationz": {
    description: "Orbital Perturbation z",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.mass": {
    description: "Total Mass",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularMomentum": {
    description: "Angular Momentum Magnitude",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularMomentumx": {
    description: "Angular Momentum x",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularMomentumy": {
    description: "Angular Momentum y",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.angularMomentumz": {
    description: "Angular Momentum z",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.momentOfInertia": {
    description: "Moment of Inertia",
    isAction: false,
    plotable: false,
    category: "vessel",
    returnType: "Vector3d",
  },
  "v.CoM": {
    description: "Center of Mass",
    isAction: false,
    plotable: false,
    category: "vessel",
    returnType: "Vector3d",
  },
  "v.atmosphericDensity": {
    description: "Atmospheric Density",
    units: "DENSITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.dynamicPressurekPa": {
    description: "Dynamic Pressure (kPa)",
    units: "DYNAMICPRESSURE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.dynamicPressure": {
    description: "Dynamic Pressure (Pa)",
    units: "DYNAMICPRESSURE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.staticPressurekPa": {
    description: "Static Pressure (kPa)",
    units: "PRES",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.staticPressure": {
    description: "Static Pressure (kPa, via FlightGlobals)",
    units: "PRES",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.atmosphericPressurePa": {
    description: "Atmospheric Pressure (Pa)",
    units: "PRES",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.atmosphericPressure": {
    description: "Atmospheric Pressure (atm)",
    units: "PRES",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.atmosphericTemperature": {
    description: "Atmospheric Temperature",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.externalTemperature": {
    description: "External Temperature",
    units: "TEMP",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.mach": {
    description: "Mach Number",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.speedOfSound": {
    description: "Speed of Sound",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.indicatedAirSpeed": {
    description: "Indicated Air Speed",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.directSunlight": {
    description: "In Direct Sunlight",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.distanceToSun": {
    description: "Distance to Sun",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.solarFlux": {
    description: "Solar Flux",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.name": {
    description: "Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.body": {
    description: "Body Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.situation": {
    description: "Vessel Situation",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.situationString": {
    description: "Vessel Situation (readable)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.vesselType": {
    description: "Vessel Type",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.landed": {
    description: "Is Landed",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.splashed": {
    description: "Is Splashed",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.landedOrSplashed": {
    description: "Is Landed or Splashed",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.landedAt": {
    description: "Landed At (biome/location)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.biome": {
    description: "Current Biome Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.biomeLocalized": {
    description: "Current Biome Name (Localized)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.isEVA": {
    description: "Is EVA",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.isActiveVessel": {
    description: "Is Active Vessel",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.isControllable": {
    description: "Is Controllable",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.isCommandable": {
    description: "Is Commandable",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.missionTime": {
    description: "Mission Time",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.missionTimeString": {
    description: "Mission Elapsed Time (formatted)",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "string",
  },
  "v.launchTime": {
    description: "Launch Time",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "v.currentStage": {
    description: "Current Stage",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "int",
  },
  "v.crewCount": {
    description: "Crew Count",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "int",
  },
  "v.crewCapacity": {
    description: "Crew Capacity",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "int",
  },
  "v.crew": {
    description: "Crew Names",
    isAction: false,
    plotable: false,
    category: "vessel",
    returnType: "string[]",
  },
  "v.upAxis": {
    description: "Local Up Axis",
    isAction: false,
    plotable: false,
    category: "vessel",
    returnType: "Vector3d",
  },
  "v.terrainNormal": {
    description: "Terrain Normal",
    isAction: false,
    plotable: false,
    category: "vessel",
    returnType: "Vector3d",
  },
  "v.loaded": {
    description: "Is Loaded",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.packed": {
    description: "Is Packed (on rails)",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "bool",
  },
  "v.angleToPrograde": {
    description: "Angle to Prograde",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "vessel",
    returnType: "double",
  },
  "o.PeA": {
    description: "Periapsis Altitude",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.ApA": {
    description: "Apoapsis Altitude",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.PeR": {
    description: "Periapsis Radius",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.ApR": {
    description: "Apoapsis Radius",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.timeToAp": {
    description: "Time to Apoapsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.timeToPe": {
    description: "Time to Periapsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.inclination": {
    description: "Inclination",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.eccentricity": {
    description: "Eccentricity",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.sma": {
    description: "Semimajor Axis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.semiMinorAxis": {
    description: "Semi-minor Axis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.semiLatusRectum": {
    description: "Semi-latus Rectum",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.lan": {
    description: "Longitude of Ascending Node",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.argumentOfPeriapsis": {
    description: "Argument of Periapsis",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.epoch": {
    description: "Epoch",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.period": {
    description: "Orbital Period",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.trueAnomaly": {
    description: "True Anomaly",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.meanAnomaly": {
    description: "Mean Anomaly",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.eccentricAnomaly": {
    description: "Eccentric Anomaly",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.maae": {
    description: "Mean Anomaly at Epoch",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.timeOfPeriapsisPassage": {
    description: "Time of Periapsis Passage",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.orbitPercent": {
    description: "Orbit Percent",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.relativeVelocity": {
    description: "Relative Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.orbitalSpeed": {
    description: "Orbital Speed",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.vel": {
    description: "Orbital Velocity Vector",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.radius": {
    description: "Orbital Radius",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.pos": {
    description: "Orbital Position Vector",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.orbitalEnergy": {
    description: "Specific Orbital Energy",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.orbitNormal": {
    description: "Orbit Normal Vector",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.eccVec": {
    description: "Eccentricity Vector",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.anVec": {
    description: "Ascending Node Vector",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.h": {
    description: "Specific Angular Momentum Vector",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.referenceBody": {
    description: "Reference Body Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "string",
  },
  "o.nextApsisType": {
    description: "Next Apsis Type (-1=Pe, 1=Ap, 0=N/A)",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.timeToNextApsis": {
    description: "Time to Next Apsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.timeToTransition1": {
    description: "Time to Transition 1",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.timeToTransition2": {
    description: "Time to Transition 2",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.patchStartTransition": {
    description: "Patch Start Transition Type",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "string",
  },
  "o.patchEndTransition": {
    description: "Patch End Transition Type",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "string",
  },
  "o.StartUT": {
    description: "Orbit Patch Start UT",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.EndUT": {
    description: "Orbit Patch End UT",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.UTsoi": {
    description: "UT of SOI Transition",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.closestEncounterBody": {
    description: "Closest Encounter Body Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "string",
  },
  "o.closestTgtApprUT": {
    description: "Closest Target Approach UT",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.encounterExists": {
    description: "SOI Encounter Exists (-1=escape, 0=none, 1=encounter)",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "int",
  },
  "o.encounterBody": {
    description: "Encounter/Escape Body Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "string",
  },
  "o.encounterTime": {
    description: "Time Until SOI Encounter/Escape",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.orbitalSpeedAt": {
    description: "Orbital Speed at Orbit Time",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.orbitalSpeedAtDistance": {
    description: "Orbital Speed at Distance",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.radiusAtTrueAnomaly": {
    description: "Radius at True Anomaly",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.trueAnomalyAtRadius": {
    description: "True Anomaly at Radius",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.orbitPatches": {
    description: "Detailed Orbit Patches Info",
    isAction: false,
    plotable: false,
    category: "orbit",
    returnType: "object",
  },
  "o.trueAnomalyAtUTForOrbitPatch": {
    description: "The orbit patch's True Anomaly at Universal Time",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.UTForTrueAnomalyForOrbitPatch": {
    description: "The orbit patch's Universal Time at True Anomaly",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "double",
  },
  "o.relativePositionAtTrueAnomalyForOrbitPatch": {
    description:
      "The orbit patch's predicted displacement from the center of the main body at the given true anomaly",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "Vector3d",
  },
  "o.relativePositionAtUTForOrbitPatch": {
    description:
      "The orbit patch's predicted displacement from the center of the main body at the given universal time",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "Vector3d",
  },
  "n.heading2": {
    description: "Heading",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.pitch2": {
    description: "Pitch",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.roll2": {
    description: "Roll",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.rawheading2": {
    description: "Raw Heading",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.rawpitch2": {
    description: "Raw Pitch",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.rawroll2": {
    description: "Raw Roll",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.heading": {
    description:
      "Heading calculated using the position of the vessels root part",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.pitch": {
    description: "Pitch calculated using the position of the vessels root part",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.roll": {
    description: "Roll calculated using the position of the vessels root part",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.rawheading": {
    description:
      "Raw Heading calculated using the position of the vessels root part",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.rawpitch": {
    description:
      "Raw Pitch calculated using the position of the vessels root part",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "n.rawroll": {
    description:
      "Raw Roll calculated using the position of the vessels root part",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "navigation",
    returnType: "double",
  },
  "b.name": {
    description: "Body Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "string",
  },
  "b.description": {
    description: "Body Description",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "string",
  },
  "b.number": {
    description: "Number of Bodies",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "int",
  },
  "b.index": {
    description: "Flight Globals Index",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "int",
  },
  "b.referenceBody": {
    description: "Reference Body Name",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "string",
  },
  "b.orbitingBodies": {
    description: "Orbiting Body Names",
    isAction: false,
    plotable: false,
    category: "body",
    returnType: "string[]",
  },
  "b.radius": {
    description: "Body Radius",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.mass": {
    description: "Body Mass",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.geeASL": {
    description: "Surface Gravity in G",
    units: "G",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.soi": {
    description: "Body Sphere of Influence",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.hillSphere": {
    description: "Hill Sphere Radius",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.rotationPeriod": {
    description: "Rotation Period",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.rotationAngle": {
    description: "Current Rotation Angle",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.angularV": {
    description: "Angular Velocity",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.tidallyLocked": {
    description: "Tidally Locked",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "bool",
  },
  "b.rotates": {
    description: "Body Rotates",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "bool",
  },
  "b.atmosphere": {
    description: "Has Atmosphere",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "bool",
  },
  "b.maxAtmosphere": {
    description: "Body Atmosphere Depth",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.atmosphereContainsOxygen": {
    description: "Atmosphere contains oxygen",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "bool",
  },
  "b.ocean": {
    description: "Has Ocean",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "bool",
  },
  "b.position": {
    description: "Body World Position",
    isAction: false,
    plotable: false,
    category: "body",
    returnType: "Vector3d",
  },
  "b.timeWarpAltitudeLimits": {
    description: "Time Warp Altitude Limits",
    isAction: false,
    plotable: false,
    category: "body",
    returnType: "object",
  },
  "b.o.gravParameter": {
    description: "Body Gravitational Parameter",
    units: "GRAV",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.relativeVelocity": {
    description: "Relative Velocity",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.PeA": {
    description: "Periapsis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.ApA": {
    description: "Apoapsis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.timeToAp": {
    description: "Time to Apoapsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.timeToPe": {
    description: "Time to Periapsis",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.inclination": {
    description: "Inclination",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.eccentricity": {
    description: "Eccentricity",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.period": {
    description: "Orbital Period",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.argumentOfPeriapsis": {
    description: "Argument of Periapsis",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.timeToTransition1": {
    description: "Time to Transition 1",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.timeToTransition2": {
    description: "Time to Transition 2",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.sma": {
    description: "Semimajor Axis",
    units: "DISTANCE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.lan": {
    description: "Longitude of Ascending Node",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.maae": {
    description: "Mean Anomaly at Epoch",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.timeOfPeriapsisPassage": {
    description: "Time of Periapsis Passage",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.trueAnomaly": {
    description: "True Anomaly",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.phaseAngle": {
    description: "Phase Angle",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "body",
    returnType: "double",
  },
  "b.o.truePositionAtUT": {
    description: "True Position at the given UT",
    isAction: false,
    plotable: false,
    category: "body",
    returnType: "Vector3d",
  },
  "m.mapIsEnabled": {
    description: "Map View Is Enabled",
    isAction: false,
    plotable: true,
    category: "map",
    returnType: "bool",
  },
  "o.maneuverNodes": {
    description: "Maneuver Nodes",
    isAction: false,
    plotable: false,
    category: "maneuver",
    returnType: "object",
  },
  "o.maneuverNodes.count": {
    description: "Number of Maneuver Nodes",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "int",
  },
  "o.maneuverNodes.deltaV": {
    description: "Maneuver Node Delta-V Vector",
    isAction: false,
    plotable: false,
    category: "maneuver",
    returnType: "Vector3d",
  },
  "o.maneuverNodes.deltaVMagnitude": {
    description: "Maneuver Node Delta-V Magnitude",
    units: "VELOCITY",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "double",
  },
  "o.maneuverNodes.UT": {
    description: "Maneuver Node Universal Time",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "double",
  },
  "o.maneuverNodes.timeTo": {
    description: "Time Until Maneuver Node",
    units: "TIME",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "double",
  },
  "o.maneuverNodes.burnVector": {
    description: "Maneuver Node Burn Vector (world space)",
    isAction: false,
    plotable: false,
    category: "maneuver",
    returnType: "Vector3d",
  },
  "o.maneuverNodes.orbitPatches": {
    description: "Orbit Patches for Maneuver Node",
    isAction: false,
    plotable: false,
    category: "maneuver",
    returnType: "object",
  },
  "o.maneuverNodes.trueAnomalyAtUTForManeuverNodesOrbitPatch": {
    description:
      "For a maneuver node, The orbit patch's True Anomaly at Universal Time",
    units: "DEG",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "double",
  },
  "o.maneuverNodes.UTForTrueAnomalyForManeuverNodesOrbitPatch": {
    description:
      "For a maneuver node, The orbit patch's Universal Time at True Anomaly",
    units: "DATE",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "double",
  },
  "o.maneuverNodes.relativePositionAtTrueAnomalyForManeuverNodesOrbitPatch": {
    description:
      "For a maneuver node, The orbit patch's predicted displacement from the center of the main body at the given true anomaly",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "Vector3d",
  },
  "o.maneuverNodes.relativePositionAtUTForManeuverNodesOrbitPatch": {
    description:
      "For a maneuver node, The orbit patch's predicted displacement from the center of the main body at the given universal time",
    isAction: false,
    plotable: true,
    category: "maneuver",
    returnType: "Vector3d",
  },
  "o.addManeuverNode": {
    description: "Add a manuever based on a UT and DeltaV X, Y and Z",
    isAction: true,
    plotable: true,
    category: "maneuver",
    returnType: "object",
  },
  "o.updateManeuverNode": {
    description: "Set a manuever node's UT and DeltaV X, Y and Z",
    isAction: true,
    plotable: true,
    category: "maneuver",
    returnType: "object",
  },
  "o.removeManeuverNode": {
    description: "Remove a manuever node",
    isAction: true,
    plotable: true,
    category: "maneuver",
    returnType: "bool",
  },
  "o.gameLanguage": {
    description: "Language",
    units: "STRING",
    isAction: false,
    plotable: true,
    category: "orbit",
    returnType: "string",
  },
};
