# OHIFViewer

What you need:

1. DICOM server (dcm4che or Orthnac)
2. Meteor to run the app


How to start the app:

1. In the app directory run `METEOR_PACKAGE_DIRS="packages" meteor` or `METEOR_PACKAGE_DIRS="packages" meteor --settings config/dcm4cheeDICOMWeb.json` if you are using dcm4che server.


How to install dcm4che:

1. Install docker-compose https://docs.docker.com/compose/install/
2. Clone dcm4che from https://github.com/dcm4che-dockerfiles/dcm4chee-arc-psql
3. Run `docker-compose up` in dcm4che directory
