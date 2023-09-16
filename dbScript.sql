--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-09-16 23:46:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3338 (class 1262 OID 16525)
-- Name: imobisTest; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "imobisTest" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';


ALTER DATABASE "imobisTest" OWNER TO postgres;

\connect "imobisTest"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16538)
-- Name: Button; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Button" (
    "idButton" integer NOT NULL,
    "textButton" text NOT NULL,
    "linkButton" text,
    "idChannel" integer NOT NULL
);


ALTER TABLE public."Button" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16557)
-- Name: Button_idButton_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Button" ALTER COLUMN "idButton" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Button_idButton_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16526)
-- Name: Campaign; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Campaign" (
    "idCampaign" integer NOT NULL,
    "nameCampaign" character varying(25) NOT NULL
);


ALTER TABLE public."Campaign" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16555)
-- Name: Campaign_idCampaign_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Campaign" ALTER COLUMN "idCampaign" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Campaign_idCampaign_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16531)
-- Name: Channel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Channel" (
    "idChannel" integer NOT NULL,
    "nameChannel" character varying(9) NOT NULL,
    "keyboardIsStandart" boolean NOT NULL,
    "messageText" text NOT NULL,
    "idCampaign" integer NOT NULL
);


ALTER TABLE public."Channel" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16556)
-- Name: Channel_idChannel_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Channel" ALTER COLUMN "idChannel" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Channel_idChannel_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3188 (class 2606 OID 16544)
-- Name: Button Button_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Button"
    ADD CONSTRAINT "Button_pkey" PRIMARY KEY ("idButton");


--
-- TOC entry 3184 (class 2606 OID 16530)
-- Name: Campaign Campaign_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Campaign"
    ADD CONSTRAINT "Campaign_pkey" PRIMARY KEY ("idCampaign");


--
-- TOC entry 3186 (class 2606 OID 16537)
-- Name: Channel Channel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Channel"
    ADD CONSTRAINT "Channel_pkey" PRIMARY KEY ("idChannel");


--
-- TOC entry 3189 (class 2606 OID 16545)
-- Name: Channel campaignFKey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Channel"
    ADD CONSTRAINT "campaignFKey" FOREIGN KEY ("idCampaign") REFERENCES public."Campaign"("idCampaign") NOT VALID;


--
-- TOC entry 3190 (class 2606 OID 16550)
-- Name: Button channelFKey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Button"
    ADD CONSTRAINT "channelFKey" FOREIGN KEY ("idChannel") REFERENCES public."Channel"("idChannel") NOT VALID;


-- Completed on 2023-09-16 23:46:26

--
-- PostgreSQL database dump complete
--

