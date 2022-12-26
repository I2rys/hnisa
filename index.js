"use strict";

// Dependencies
const request = require("request-async")

// Variables
var hnisa = {}

/// Main
// IP
hnisa.getIPInformation = async function(ip){
    const response = await request(`https://hnisa.vercel.app/api/ip/info?ip=${ip}`)

    return JSON.parse(response.body).data
}

// Breaches
hnisa.emailBreaches = async function(email){
    const response = await request(`https://hnisa.vercel.app/api/breaches/email?email=${email}`)

    return JSON.parse(response.body).data
}

// Check
hnisa.isEmailDisposable = async function(email){
    const response = await request(`https://hnisa.vercel.app/api/check/email/disposable?email=${email}`)
    
    return JSON.parse(response.body).data
}

hnisa.emailExists = async function(email){
    const response = await request(`https://hnisa.vercel.app/api/check/email/exists?email=${email}`)
    
    return JSON.parse(response.body).data
}

hnisa.emailCheckup = async function(email){
    const response = await request(`https://hnisa.vercel.app/api/check/email/checkup?email=${email}`)
    
    return JSON.parse(response.body).data
}

hnisa.isDomainUp = async function(domain){
    const response = await request(`https://hnisa.vercel.app/api/check/domain/up?domain=${domain}`)
    
    return JSON.parse(response.body).data
}

hnisa.checkDomainReputation = async function(domain){
    const response = await request(`https://hnisa.vercel.app/api/check/domain/reputation?domain=${domain}`)
    
    return JSON.parse(response.body).data
}

// Scan
hnisa.scanHostPorts = async function(host){
    const response = await request(`https://hnisa.vercel.app/api/scan/host/ports?host=${host}`)
    
    return JSON.parse(response.body).data
}

hnisa.scanWebsiteForEmails = async function(link){
    const response = await request(`https://hnisa.vercel.app/api/scan/website/emails?link=${link}`)
    
    return JSON.parse(response.body).data
}

hnisa.scanWebsiteAccessibility = async function(url){
    const response = await request(`https://hnisa.vercel.app/api/scan/website/accessibility?url=${url}`)
    
    return JSON.parse(response.body).data
}

// Random
hnisa.randomUniqueRobotPicture = async function(){
    const response = await request("https://hnisa.vercel.app/api/random/robotProfilePicture")
    
    return JSON.parse(response.body).data
}

module.exports = hnisa