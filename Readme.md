# omron-env-sensor-raspi-noble-example

A sample to get [Omron environment sensor 2JCIE-BL01](https://omronmicrodevices.github.io/products/2jcie-bl01/communication_if_manual.html) data using Raspberry Pi + noble

# Setup & Run

```
git clone https://github.com/bathtimefish/omron-env-sensor-raspi-noble-example.github
cd omron-env-sensor-raspi-noble-example
npm install
npm start
```

# Data Sample

```
{"companyId":725,"no":191,"temp":26.6,"hum":60.15,"light":271,"uv":0.02,"pressure":1010.3,"sound":51.33,"disconf":75.08,"heat":24,"rfu":0,"battery":196}
{"companyId":725,"no":192,"temp":26.48,"hum":60.12,"light":274,"uv":0.02,"pressure":1010.3,"sound":49.16,"disconf":74.91,"heat":23.89,"rfu":0,"battery":196}
{"companyId":725,"no":193,"temp":26.37,"hum":60.12,"light":271,"uv":0.02,"pressure":1010.4,"sound":44.95,"disconf":74.75,"heat":23.78,"rfu":0,"battery":196}
{"companyId":725,"no":193,"temp":26.37,"hum":60.12,"light":271,"uv":0.02,"pressure":1010.4,"sound":44.95,"disconf":74.75,"heat":23.78,"rfu":0,"battery":196}
{"companyId":725,"no":194,"temp":26.24,"hum":60.11,"light":271,"uv":0.02,"pressure":1010.2,"sound":54.01,"disconf":74.57,"heat":23.67,"rfu":0,"battery":196}
```

# Dependencies

[noble](https://github.com/noble/noble)

