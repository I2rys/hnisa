"use strict";

// Dependencies
const hnisa = require("../index")

// Main
describe("HNisa", ()=>{
    test("Grab IP Information", async()=>{
        const response = await hnisa.getIPInformation("1.1.1.1")
        
        expect(response.asn).toBe("AS13335")
    })

    test("Check email breaches", async()=>{
        const response = await hnisa.emailBreaches("example@gmail.com")
        
        expect(response.length ? true : false).toBe(true)
    })

    test("Is email disposable", async()=>{
        const response = await hnisa.isEmailDisposable("example@gmail.com")
        
        expect(response).toBe(false)
    })

    test("Does email exists", async()=>{
        const response = await hnisa.emailExists("example21595812512@gmail.com")
        
        expect(response).toBe(false)
    })

    test("Email checkup", async()=>{
        const response = await hnisa.emailCheckup("example@gmail.com")
        
        expect(response.valid_syntax).toBe(true)
    })

    test("Is domain up", async()=>{
        const response = await hnisa.isDomainUp("example.com")
        
        expect(response.message).toBe("Up")
    })

    test("Check domain reputation", async()=>{
        const response = await hnisa.checkDomainReputation("facebook.com")
        
        expect(response).toBe("Bad")
    })

    test("Scan host ports", async()=>{
        const response = await hnisa.scanHostPorts("example.com")
        
        expect(response.ports.open.length).toBe(2)
    })

    test("Scan website emails", async()=>{
        const response = await hnisa.scanWebsiteForEmails("https://google.com/")
        
        expect(response.length).toBe(1)
    })

    test("Scan website accessibility", async()=>{
        const response = await hnisa.scanWebsiteAccessibility("https://example.com/")
        
        expect(response.domain).toBe("example.com")
    })

    test("Generate random robot profile picture", async()=>{
        const response = await hnisa.randomUniqueRobotPicture()
        
        expect(response.length ? true : false).toBe(true)
    })
})