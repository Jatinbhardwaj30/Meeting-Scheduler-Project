"use client";
import React, { useEffect, useState } from "react";
import MeetingTimeDateSelection from "../_components/MeetingTimeDateSelection";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";

function SharedMeetingEvent({ params }) {
  const db = getFirestore(app);
  const [businessInfo, setBusinesInfo] = useState();
  const [eventInfo, setEventInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [unwrappedParams, setUnwrappedParams] = useState(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params; // Unwrap the params Promise
      setUnwrappedParams(resolvedParams);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (unwrappedParams) {
      getMeetingBusinessAndEventDetails(unwrappedParams);
    }
  }, [unwrappedParams]);

  /**
   * Used to get Business Info and Event Details for Given Login User/Business Owner
   */
  const getMeetingBusinessAndEventDetails = async (resolvedParams) => {
    setLoading(true);

    try {
      // Query for the business information
      const q = query(
        collection(db, "Business"),
        where("businessName", "==", resolvedParams.business)
      );
      const docSnap = await getDocs(q);
      docSnap.forEach((doc) => {
        setBusinesInfo(doc.data());
      });

      // Query for the meeting event details
      const docRef = doc(db, "MeetingEvent", resolvedParams.meetingEventId);
      const result = await getDoc(docRef);
      setEventInfo(result.data());
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MeetingTimeDateSelection
          eventInfo={eventInfo}
          businessInfo={businessInfo}
        />
      )}
    </div>
  );
}

export default SharedMeetingEvent;
