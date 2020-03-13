# Introduction

## Background

With the integration and deepening of the company's business in the field of power distribution, various business requirements have been proposed. In order to be able to quickly land related requirements, a technology platform that can support rapid development in the field of power distribution is urgently needed. Although the existing business systems such as MDC, MDM, and Billing of the System Software Division also implement some common functions, due to the inconsistency in the technology stack and style and the lack of platformization, no development platform has been formed to support the business system. 

By proposing HX UAP (hereinafter referred to as HX UAP) as a platform product, it lays a solid foundation for the unification of the products of the subsequent system software division. As the most basic development platform for the business system of the System Software Division, the functions and architecture of HX UAP directly reflect the direction of the software platform of the System Software Division.

## Product target

The goal of HX UAP is to build a unified, stable, fast and scalable platform by abstracting and implementing various platform services and defining unified front-end components to support the subsequent development and operation of power distribution business systems.

Through the development and application of HX UAP, business systems will complete integration and integration, providing a unified application entrance and a consistent user experience. HX UAP design should meet the following principles:

* Platform and business separation;
* Develop step by step and gradually unify;
* Centralized and distributed deployment;

## Product range definition

HX UAP product range is as follows:

* Common platform services: including organization system, permission model, system log, unstructured storage, message center, workflow, task scheduling, distributed storage, etc ;
* Unified front-end framework: including unified front-end design specifications, system login, and menu display;
* Auxiliary monitoring platform: real-time monitoring and display of the operation of business systems developed based on HX UAP;
* Application development components: Encapsulate or develop a set of front-end components, unify the front-end page style, and simplify the development of application interfaces.
* Multi-tenant: support multi-tenant management and configuration, establish a tenant-based organization and permission model system;
* Microservices: The platform needs to be compatible with supporting monolithic and microservice architectures;

## Product value

HX UAP is based on a variety of mature software systems or frameworks, and combines the actual needs of multiple system software in the System Software Division to provide a unified, stable, and robust development platform:

* Platformization
Forming a development model based on HX UAP, each business system only needs to develop functions for actual business scenarios, without paying attention to the underlying platform issues
* Modular
HX UAP itself also has modular features. During deployment and use, different models need only be deployed according to actual needs. Each functional model forms an independent service. Business systems developed based on HX UAP also have similar capabilities.
* compatibility
The HX UAP platform is compatible with the underlying functions of existing business systems. The front end meets the overall interface style and operation mode, while also providing the operation mode and habits of the old system. The platform also provides various adaptations for retrofitting legacy systems.
* Ease of use
It meets the unified style of the interface design of the system software, and refers to the habits of various field users in the operation mode, so that the end user can get started quickly.