 
   import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"; 
import { useEffect, useRef } from "react"; 
 
function Video() { 
  const containerRef = useRef(null); 
 
  useEffect(() => { 
    const params = new URLSearchParams(window.location.search); 
 
    const roomID = params.get("roomID") || "test-room"; 
 
    // Your ZEGOCLOUD App ID 
    const appID = 1217716565; 
 
    // ⚠️ TEST ONLY 
    // Never push this secret to GitHub. 
    const serverSecret =  cd0018046a126e9c4aeb57ae349455d6;  
 
    const userID = 
      localStorage.getItem("username") || 
      "user_" + Date.now(); 
 
    const userName = 
      localStorage.getItem("username") || 
      "User"; 
 
    const kitToken = 
      ZegoUIKitPrebuilt.generateKitTokenForTest( 
        appID, 
        serverSecret, 
        roomID, 
        userID, 
        userName 
      ); 
 
    const zp = ZegoUIKitPrebuilt.create(kitToken); 
 
    zp.joinRoom({ 
      container: containerRef.current, 
 
      scenario: { 
        mode: ZegoUIKitPrebuilt.OneONoneCall, 
      }, 
 
      sharedLinks: [ 
        { 
          name: "Personal link", 
          url: 
            window.location.origin + 
            window.location.pathname + 
            "?roomID=" + 
            roomID, 
        }, 
      ], 
    }); 
 
    return () => { 
      try { 
        zp.destroy(); 
      } catch (error) { 
        console.log("Zego cleanup:", error); 
      } 
    }; 
  }, []); 
 
  return ( 
    <div 
      ref={containerRef} 
      style={{ 
        width: "100vw", 
        height: "100vh", 
      }} 
    /> 
  ); 
} 
 
export default Video;