# Circular reference 

If you create a circular reference in an object and then stringify it, with LWS enabled it will throw an error always
If you send the object through an @api-exported function from another component, then in Locker, the circular reference is avoided due to the function arguments getting copied.

## Repro
1. Deploy this code to a scratch org
2. Put the component on an app home page (i.e. Service app)
3. Open the home page
4. Enable LWS
5. Click on "Encrypt with Cmp"
6. Observe an error in JSON.stringify
7. Click on "Encrypt with Import"
8. Observe an error in JSON.stringify
8. Disable LWS
10. Repeat step 4
11. Observe no errors
12. Repeat step 5
13. Obseve an error in JSON.stringify




