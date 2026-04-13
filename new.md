# Open Home Foundation - Device database

## Your privacy matters to us. Always.

## Data Use Statement

_Version January 8, 2026_

We’re currently hard at work building the [Open Home Foundation](https://www.openhomefoundation.org) device database, a real-world, actionable list of smart home devices – focusing on device model, manufacturer, features, software, interoperability, and other specs you’ve told us are most important to you. Ideally, it will greatly reduce the time you need to research future smart home purchases.

But to create the most comprehensive, globally inclusive database of devices we need your help understanding what devices your smart home uses, and how they are integrated. As a result, we've created a quick and easy (opt-in) way for you to contribute by automatically uploading smart home device information directly from your [Home Assistant](https://www.home-assistant.io) instance.

That said, we refuse to ever compromise when it comes to your fundamental right to privacy. At the Open Home Foundation, this means more than a checkbox. We want you to feel safe because you know exactly what information we have access to, what we will do with it, and how you can opt in and opt out at any time – exactly in line with the views described in our [position paper on Privacy in the smart home](https://drive.google.com/open?id=18Bw8P2Wxr0uWgcqLAf4TfH6aMOmcgw0q).

So before you get involved, here’s how we protect your privacy (consistent with our [Home Assistant analytics](https://analytics.home-assistant.io) approach):

1. **You are in control (opt-in):** This feature will be **strictly opt-in**. You must give explicit permission for your Home Assistant instance to send device information to the database. You can opt-out again at any time.
2. **We will not use personally identifiable information:** We will not use or further process any personally identifiable data. We only care about the information that describes a device, including things like the manufacturer, model, and software version used to potentially deduct insights to be shared to the public.
3. **Data will be aggregated:** The information sent will be **aggregated**, meaning that data from multiple Home Assistant instances will be combined to build the database. Consequently, no individual submissions are added to the database but only aggregated ones once certain thresholds have been reached (e.g. a minimum number of 10 independent device submissions).

We are building this database as a communal effort – by and for our community – to become a foundational resource for the smart home ecosystem. We are committed to ensuring its integrity remains independent of commercial influence, and that your privacy is protected at every step of the way. For more information on our _guiding principles_ please [visit this page](https://github.com/OHF-Device-Database/backlog-items/wiki/Welcome-to-Device-Database#our-guiding-principles-building-the-device-database).

## Example submission

Below you find an exemplary submission or “_snapshot_”, i.e. what data is submitted by your Home Assistant to the device database.

The snapshots include:

For each device:

- Integration domain
- Manufacturer, model name, model ID
- Hardware and software version
- Whether the device has a configuration URL
- Device hierarchy information (via_device relationships)

For each entity belonging to a device:

- Entity domain (light, sensor, switch, etc.)
- Entity category (config, diagnostic, or none)
- Original device class (temperature, humidity, etc.)
- Unit of measurement
- Whether it uses _has_entity_name_
- Whether it has an assumed state

Device snapshots do not include device names, entity names, entity IDs, state values, unique identifiers (MAC addresses, serial numbers), IP addresses, or any personally identifiable information. Device IDs are anonymized using integration-scoped indices.

Currently custom integrations are not included.

Snapshots are uploaded every 24 hours.

```json
{
  "hue": {
    "devices": [
      {
        "entry_type": null,
        "has_configuration_url": true,
        "hw_version": "2.1",
        "manufacturer": "Signify",
        "model": "Philips Hue Bridge",
        "model_id": "BSB002",
        "sw_version": "1.65.1",
        "via_device": null,
        "entities": []
      },
      {
        "entry_type": null,
        "has_configuration_url": false,
        "hw_version": null,
        "manufacturer": "Signify",
        "model": "Hue color lamp",
        "model_id": "LCT015",
        "sw_version": "1.104.2",
        "via_device": ["hue", 0],
        "entities": [
          {
            "assumed_state": false,
            "domain": "light",
            "entity_category": null,
            "has_entity_name": true,
            "original_device_class": null,
            "unit_of_measurement": null
          }
        ]
      }
    ],
    "entities": []
  }
}
```

## Why do we need device information?

We want to ensure that the device database accurately reflects real-world smart homes. Hereby, the integrity and authenticity of the device database depends on data from actual Home Assistant users. By combining numerous submissions for each device, we can establish an objective, non-biased validation process.

Our guidelines for including submitted data to the database:

- Generally, no individual submissions are added to the database
- Instead, the database considers the **aggregate** (or combined total) of multiple submissions
- A device will only be included if this combined data **meets certain thresholds**, like a valid amount of individual submissions for the same device

## Where is the data stored and for how long?

The device database is securely hosted in one of Amazon Web Services (AWS) European availability zones.

To ensure the integrity and authenticity of the data we receive we are splitting the device database in two main focus areas, or “zones”:

- Staging zone
  This is where your submitted device data resides until it passes checks to ensure authenticity and integrity before being aggregated and moved to the live zone for general availability.
  Hereby, we are using two kinds of (random) identifiers:

  - _Submission identifier_: Unique for each submission
  - _Submitter identifier_: Unique for each submitter

  Your submission data is stored for a maximum of 60 days since the last update.

- Live zone
  Only contains aggregates of the submitted snapshots with staging-zone and identifiers removed. Data in the live zone will be publicly accessible for full transparency.

We do not knowingly collect and we do not retain any personal data. Aggregated, non-personal, live zone data will remain available as long as it remains relevant.

## What information do we need for the device database?

All data points contributed by your Home Assistant to the device database is described in the [device database submission protocol v3](https://docs.google.com/document/d/1YDjoj8muzDaCOsBuFqnJEKGTi4tL4TvNosyCJTeY3wg/edit?tab=t.0#heading=h.7i9ja9t6i871).

Our aim is to start with a basic set of information. After all, you are able to opt-out at any time.

## What information do we _not_ collect?

The following data categories are explicitly excluded from the submission to the device database:

- **No personal identifiers:** We do not collect names, email addresses, or any other information that directly identifies you.
- **No location data:** We do not collect any location data, such as addresses, or time zones.
- **No credentials:** We do not collect logins, passwords, API keys, client IDs, or any other secrets used by your devices or services, nor do we access or store IP addresses.
- **No personal media:** The system will not access or upload any images, sounds, or videos.
- **No home configuration:** We do not collect your user-defined structural data, such as the names of your rooms, areas, or groups.

## How will my device data be sent to the device database?

Once you actively opt-in to contributing to the device database via the setting in the Analytics section in your Home Assistant Companion app or web interface (via _Settings > Analytics > Device Analytics_), your Home Assistant instance will automatically upload a snapshot of your device information.

This process then repeats daily to help keep the database up to date. Any changes, including new devices you add, will contribute to the quality of the device database.

Like everything we do, this process is completely transparent and publicly available. You can read the [full technical documentation on the submission protocol we use](https://github.com/OHF-Device-Database/device-database) to see exactly how the information is structured and sent.

## What does it mean to "opt in"?

"Opting in" means you are giving your explicit permission for your Home Assistant instance to participate and submit data to the device database. This is **not on by default**.

## What does it mean to "opt out"?

"Opting out" means you can change your mind and stop contributing device data at any time, for any reason. You are always in control, and you can opt in and out as often as you like via Home Assistant settings.

## What happens if I stop sharing my device data?

From that moment on, your Home Assistant instance will immediately stop sending any new device information. The periodic, automatic snapshots will no longer be sent to the database.

## Will my previously sent information be deleted?

This is a key point: We cannot automatically delete your past contributions because **we have no way of knowing which data is yours.** This is due to the fact that no individual submissions are included in the database – only aggregated information. Furthermore, before a submission is considered to be included in the database it needs to hit certain thresholds, like a minimum amount of 10 individual submissions for the same device.

## What do you know about me? And my home?

At the moment of submission we use a random ID to identify which devices are submitted from a single instance. This information is stripped once we aggregate data.

We envision a future where everybody can use the device database to gain insights and access its data. For example, your Home Assistant instance could query our database to search for compatible or commonly combined devices. If we implement such a system it will be your instance that accesses the public database – neither the [Open Home Foundation](https://www.openhomefoundation.org) nor the device database will store or record any information coming from your instance based on such a query.

## How do you ensure that my personal info isn't sent by accident?

We understand that integrations can sometimes mix personal data with device information, like “Sharon’s iPhone 17”. The submission process for the device database is explicitly designed to handle this risk and actively protect your privacy.

First, we attempt to exclude any information that is not device-centric. Your submissions are based on unique Model IDs, and we do not ask your instance for any field that could contain an email, name, location, or other identifier.

Second, as an extra layer of protection, we actively scan all submissions to find and remove any personal information in common formats, like email addresses that have passed our first screening. This ensures that sensitive data is scrubbed before it ever enters the database.

If you ever feel that some personal information may have been exposed, we urge you to contact us ([devices@openhomefoundation.org](mailto:devices@openhomefoundation.org)) so we can investigate and address it immediately.

## What if I change my mind in the future?

You can opt-out at any time, for any reason. The moment you do, the effect is immediate, and your instance will stop sending any new submissions to the device database unless you decide to opt in again in the future.

## Where can I access device data collected so far?

Transparency is key: We believe in publicly sharing the data we collect, provided it is aggregated and anonymous.

Therefore, we provide a public interface for accessing the device database:

- **A Web interface** (for direct and easy viewing)

[https://device-database.eco-dev-aws.openhomefoundation.com](https://device-database.eco-dev-aws.openhomefoundation.com)

- **An API** (for programmatic access)

The API we are going to publicly make available once it has reached a mature state.

## Who to contact with any questions?

If you have any questions on any aspect of this device database notice, please contact us at [devices@openhomefoundation.org](mailto:devices@openhomefoundation.org).
